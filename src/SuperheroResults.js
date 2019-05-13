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
   } else  if (props.isSuper === 'bad'){
      return (
         "not a super!"
         )
   } else if (props.isSuper === "not in database"){
      return "not in database!"
   } else if (props.isSuper === ''){
      return "Find a super :)"
   }
}

export default SuperheroResults