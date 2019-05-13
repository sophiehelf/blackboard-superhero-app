import React from 'react'
import SuperheroSearch from './Supers/SuperheroSearch.js'
import VillainSearch from './Villains/VillainSearch.js'

function CharacterContainer(props) {
    return (
        <div>
            <SuperheroSearch />
            <br />
            <br />
            <VillainSearch />
        </div>
    )
}

export default CharacterContainer