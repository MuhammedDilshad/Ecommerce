import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productDetails } from "../../Assist/Assist";
import "./Product.css";

function Product() {
  return (
    <div>
      <div>
        <h2>Discover NEW Arrivals</h2>
        <p>Recently added shirts</p>
      </div>
      <div>
        <div className="BCard">
          {productDetails.map((value) => (
            <ProductCard value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
