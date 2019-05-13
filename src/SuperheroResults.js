import React from 'react'

function SuperheroResults(props) {

   if (props.isSuper === "good") { 
      return (
         <div id="super-container">
         <span className="char-name">{props.selectedSuper}</span> <br/>
         Intelligence: <span className="data">{props.superAttributes.intelligence}</span> <br/>
         Strength: <span className="data">{props.superAttributes.strength}</span> <br/>
         Speed: <span className="data">{props.superAttributes.speed}</span> <br />
         Durability: <span className="data">{props.superAttributes.durability}</span> <br />
         Power: <span className="data">{props.superAttributes.power}</span> <br />
         Combat: <span className="data">{props.superAttributes.combat}</span>
         </div>
      )
   } else  if (props.isSuper === 'bad'){
      return (
         <span className="error-result">Not a Super</span>
         )
   } else if (props.isSuper === "not in database"){
      return <span className="error-result">Not in Database</span>
   } else if (props.isSuper === ''){
      return ""
   }
}

export default SuperheroResults