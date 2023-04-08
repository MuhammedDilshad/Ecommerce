import React, { useState } from "react";
import { productDetails } from "../../Assist/Assist";
import "./CartBody.css";

const CartBody = (props) => {
  const [count, setCount] = useState(1);
  const data = productDetails.find((id) => id === id);
  const val = parseInt(data.Price);
  const [price, setPrice] = useState(val);
  const quantity = parseInt(data.Quantity);

  const decrimentCount = (val) => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setPrice((prev) => prev - val);
    }
  };
  const incrementCount = (val) => {
    if (count < quantity) {
      setPrice(val * (count + 1));
      setCount((prev) => prev + 1);
    }
  };
  return (
    <div className="mainItems">
      <h4 style={{ textAlign: "left" }}>HOME/SHOPPING CART</h4>
      <div className="header">
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Quantiy</h4>
        <h4>Total</h4>
      </div>
      <hr />
      <div className="product">
        <img className="productImg" src={data.ImageOne} alt="" />
        <h5>{data.Price}</h5>
        <div className="Count">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => decrimentCount(val)}
          >
            -
          </div>
          <div>{count}</div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => incrementCount(val)}
          >
            +
          </div>
        </div>
        <h5>{price}</h5>
      </div>
      <hr />
      <div>
        <h1>Cart Totals</h1>
        <div className="carttotal">
          <div className="items">
            <medium>Subtotal</medium>
            <strong>${price}</strong>
          </div>
          <hr />
          <div className="items">
            <medium>Shipping Fee</medium>
            <medium>Free!!!</medium>
          </div>
          <hr />
          <div className="items">
            <strong>Total</strong>
            <strong>${price}</strong>
          </div>
          <button className="itemBt">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
