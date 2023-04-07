import React from "react";
import "./FooterCard.css";

const FooterCard = (props) => {
  let info = props.value.data;
  return (
    <div className="pointss">
      <h4>{props.value.header}</h4>
      <div>
        {info.map((value) => (
          <p>{value}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterCard;
