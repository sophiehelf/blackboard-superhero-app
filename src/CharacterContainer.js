import React from 'react'
import SuperheroSearch from './SuperheroSearch.js'
import VillainSearch from './VillainSearch.js'

function CharacterContainer(props) {
    return (
        <div className="character-container">
            <SuperheroSearch />
            <br />
            <br />
            <VillainSearch />
        </div>
    )
}

export default CharacterContainer