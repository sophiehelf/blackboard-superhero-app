import React from 'react'

class SuperheroSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedSuper: "",
            superheroStats: {},
            validationError: ""
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
            console.log(jsonResponse)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        Search a Superhero
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SuperheroSearch