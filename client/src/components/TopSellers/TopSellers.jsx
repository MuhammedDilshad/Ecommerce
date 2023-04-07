import React from "react";
import TopSellersCard from "../TopSellersCard/TopSellersCard";
import "./TopSellers.css";
import { TopSellersData } from "../../Assist/Assist";

function TopSellers() {
  return (
    <div className="Top">
      <h1>Top Sellers</h1>
      <p>Browse our top-selling products</p>
      <div className="TopSellers">
        {TopSellersData.map((value) => (
          <TopSellersCard value={value} />
        ))}
      </div>
      <button className="NewBt">SHOP NOW</button>
    </div>
  );
}

export default TopSellers;
