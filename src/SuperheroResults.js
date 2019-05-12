import React from 'react'

function SuperheroResults(props) {

   return (
      <div>
      {props.selectedSuper} <br />
      {props.isSuper} <br/>
      </div>
   )

}

export default SuperheroResults