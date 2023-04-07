import React from "react";
import banner from "../../img/Hero.png";

function Banner() {
  const styles = {
    textAlign: "center",
  };
  return (
    <div style={styles}>
      <img src={banner} alt="" />
    </div>
  );
}

export default Banner;
