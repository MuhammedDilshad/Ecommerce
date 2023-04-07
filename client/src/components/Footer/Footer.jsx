import React from "react";
import FooterCard from "../FooterCard/FooterCard";
import "./Footer.css";
import { BottomData } from "../../Assist/Assist";

function Footer() {
  return (
    <div className="Footer">
      {BottomData.map((value) => (
        <FooterCard value={value} />
      ))}
    </div>
  );
}

export default Footer;
