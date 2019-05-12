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

        fetch('https://superheroapi.com/api/10161612492070527/all.json')
        .then(res => res.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault() 
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Search a Superhero
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}

export default SuperheroSearch