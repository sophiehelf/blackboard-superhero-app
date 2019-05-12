import React from 'react'

function SuperheroResults(props) {

   if (props.isSuper === "good") { 
      return (
         <div>
         {props.selectedSuper} <br/>
         {props.superAttributes.strength} <br/>
         {props.superAttributes.intelligence}
         </div>
      )
   } else  {
      return (
         "not a super!"
         )
   } 
}

export default SuperheroResults