import React from 'react'

function VillainResults(props) {

   if (props.isVillain === "bad") { 
      return (
         <div id="villain-container">
         <span className="char-name">{props.selectedVillain}</span> <br/>
         Intelligence: {props.villainAttributes.intelligence} <br/>
         Strength: {props.villainAttributes.strength} <br/>
         Speed: {props.villainAttributes.speed} <br />
         Durability: {props.villainAttributes.durability} <br />
         Power: {props.villainAttributes.power} <br />
         Combat: {props.villainAttributes.combat}
         </div>
      )
   } else  if (props.isVillain === 'good'){
      return (
         "not a villain!!"
         )
   } else if (props.isVillain === "not in database"){
      return "not in database!"
   } else if (props.isVillain === ''){
      return ""
   }
}

export default VillainResults