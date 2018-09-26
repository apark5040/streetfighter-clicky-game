import React from "react";
import "./streetFighter.css"

const Streetfighter = props => (
    <div>
      <img onClick={props.onClick} dataid={props.id} alt={props.name} src={props.image} width="200px" height="200px"/>
    </div>
);


export default Streetfighter;