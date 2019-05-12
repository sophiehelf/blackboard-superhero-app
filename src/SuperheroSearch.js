import React from 'react'
import SuperheroResults from './SuperheroResults.js'

class SuperheroSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedSuper: ""
        }
    }

    componentDidMount() {
        console.log("Component has mounted")
    }

    handleChange = (e) => {
        this.setState({selectedSuper: e.target.value})
    }
 
    handleOnSubmit = (e) =>{
        e.preventDefault()
        fetch(`https://superheroapi.com/api/10161612492070527/search/${this.state.selectedSuper}`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({selectedSuper: jsonResponse.results[0].name})
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        Search a Superhero
                        <br />
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Search" />
                </form>

                <SuperheroResults />
            </div>
        )
    }
}

export default SuperheroSearch