import React from 'react'

function VillainResults(props) {

   if (props.isVillain === "bad") { 
      return (
         <div id="villain-container">
         <span className="char-name">{props.selectedVillain}</span> <br/>
         Intelligence: <span className="data">{props.villainAttributes.intelligence}</span> <br/>
         Strength: <span className="data">{props.villainAttributes.strength}</span> <br/>
         Speed: <span className="data">{props.villainAttributes.speed}</span> <br />
         Durability: <span className="data">{props.villainAttributes.durability}</span> <br />
         Power: <span className="data">{props.villainAttributes.power}</span> <br />
         Combat: <span className="data">{props.villainAttributes.combat}</span>
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