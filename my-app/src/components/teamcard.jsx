import React from "react";
function TeamCard(props){
    return <div className="person col-4 col" >
    <img  src = {props.img} alt={props.name}/>
      <div className="shoulder" >
          <p className="name">{props.name}</p>
          <p className="position">{props.post}</p>
          <hr className = "hr-two"/>
          <p>{props.edu}</p>
          <p>{props.campus}</p>
          <p>{props.year}</p>
      </div>
  </div>



}
export default TeamCard;