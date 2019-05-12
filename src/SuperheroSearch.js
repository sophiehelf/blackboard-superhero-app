import React from 'react'

class SuperheroSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            superheroes: [],
            superheroStats: {},
            validationError: ""
        }
    }

    componentDidMount() {

        fetch('https://superheroapi.com/api/10161612492070527/1')
        .then(res => res.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
        })
    }

    render() {
        return (
            <div>
                <select></select>
            </div>
        )
    }
}

export default SuperheroSearch