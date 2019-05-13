import React from 'react'
import SuperheroResults from './SuperheroResults.js'

class SuperheroSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedSuper: "",
            superAttributes: {},
            isSuper: ''
        }
    }

    componentDidMount() {
        console.log("Superhero Component has mounted")
    }

    handleBlur = (e) => {
        this.setState({selectedSuper: e.target.value})
    }
 
    handleOnSubmit = (e) =>{
        e.preventDefault()
        fetch(`https://superheroapi.com/api/10161612492070527/search/${this.state.selectedSuper}`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                selectedSuper: jsonResponse.results[0].name,
                superAttributes: jsonResponse.results[0].powerstats,
                isSuper: jsonResponse.results[0].biography.alignment
            }, () => console.log(this.state.isSuper))
        }).catch(error => {
            this.setState({
                isSuper: 'not in database'
            })
        })
    }

    render() {
        return (
            <div>
                <span>Search for a Superhero</span>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        <br />
                        <input type="text" name="name" className="input-box" onBlur={this.handleBlur}/>
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Search" />
                </form>
                <br />
                <SuperheroResults 
                superAttributes={this.state.superAttributes}
                selectedSuper={this.state.selectedSuper}
                isSuper={this.state.isSuper}/>
            </div>
        )
    }
}

export default SuperheroSearch