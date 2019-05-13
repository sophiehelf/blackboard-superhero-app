import React from 'react'
import VillainResults from './VillainResults.js'

class VillainSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedVillain: "",
            villainAttributes: {},
            isVillain: ''
        }
    }

    componentDidMount() {
        console.log("Villain Component has mounted")
    }

    handleBlur = (e) => {
        this.setState({selectedVillain: e.target.value})
    }
 
    handleOnSubmit = (e) =>{
        e.preventDefault()
        fetch(`https://superheroapi.com/api/10161612492070527/search/${this.state.selectedVillain}`)
        .then(res => res.json())
        .then(jsonResponse => {
            this.setState({
                selectedVillain: jsonResponse.results[0].name,
                villainAttributes: jsonResponse.results[0].powerstats,
                isVillain: jsonResponse.results[0].biography.alignment
            })
        }).catch(error => {
            this.setState({
                isVillain: 'not in database'
            })
        })
    }

    render() {
        return (
            <div>
                <span>Search for a Villain</span>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                        <br />
                        <input type="text" name="name" className="input-box" onBlur={this.handleBlur}/>
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Search" className="input-button"/>
                </form>
                <br />
                <VillainResults 
                    villainAttributes={this.state.villainAttributes}
                    selectedVillain={this.state.selectedVillain}
                    isVillain={this.state.isVillain}
                />
            </div>
        )
    }
}

export default VillainSearch