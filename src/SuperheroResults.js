import React from 'react'

function SuperheroResults(props) {

   if (props.isSuper === "good") { 
      return (
         <div id="super-container">
         <span className="char-name">{props.selectedSuper}</span> <br/>
         Intelligence: {props.superAttributes.intelligence} <br/>
         Strength: {props.superAttributes.strength} <br/>
         Speed: {props.superAttributes.speed} <br />
         Durability: {props.superAttributes.durability} <br />
         Power: {props.superAttributes.power} <br />
         Combat: {props.superAttributes.combat}
         </div>
      )
   } else  if (props.isSuper === 'bad'){
      return (
         "not a super!"
         )
   } else if (props.isSuper === "not in database"){
      return "not in database!"
   } else if (props.isSuper === ''){
      return ""
   }
}

export default SuperheroResults