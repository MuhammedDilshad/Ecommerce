import React from "react";
import "./AdvCard.css";

function AdvCard(props) {
  return (
    <div className="AdvCard">
      <h1>{props.value.Name}</h1>
      <p>{props.value.content}</p>
      <button className="AdBt">{props.value.buttonName}</button>
    </div>
  );
}

export default AdvCard;
