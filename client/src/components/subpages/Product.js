import React from "react";

import "../../styles/subpages/product.css";

import Styling from "../../products/Styling";
import Shampoo from "../../products/shampoo";
import Conditioner from "../../products/Conditioner";

export default function Product() {
  function renderStyles() {
    return Styling.map((prod) => {
      return (
        <div className="prod">
          <div className="prod-name">{prod.productName}</div>
          <div className="prod-img">
            <img src={prod.img} loading="lazy" alt="Styling" />
          </div>
          <div className="prod-info">
            <div className="prod-price">
              Price:{" "}
              {prod.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
            <div className="prod-stock">Quantity: {prod.stock}</div>
          </div>
        </div>
      );
    });
  }

  function RenderShampoo() {
    return Shampoo.map((prod) => {
      return (
        <div className="prod">
          <div className="prod-name">{prod.productName}</div>
          <div className="prod-img">
            <img src={prod.img} alt="Shampoo" />
          </div>
          <div className="prod-info">
            <div className="prod-price">
              Price:{" "}
              {prod.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
            <div className="prod-stock">Quantity: {prod.stock}</div>
          </div>
        </div>
      );
    });
  }

  function RenderConditioner() {
    return Conditioner.map((prod) => {
      return (
        <div className="prod">
          <div className="prod-name">{prod.productName}</div>
          <div className="prod-img">
            <img src={prod.img} alt="Conditioner" />
          </div>
          <div className="prod-info">
            <div className="prod-price">
              Price:{" "}
              {prod.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
            <div className="prod-stock">Quantity: {prod.stock}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="pageContent">
      <div className="prodPage-header">
        <div className="prodPage-title">Products</div>
        <div className="prodPage-desc">
          Browse our catalog of hair products. We have products ranging from
          styling cream to hair coloring to shampoo and conditioner. Purchase
          products in store and check availability of your favorite products
          online.
        </div>
      </div>
      <div className="prodPage-gallery-ctnr">
        <div className="prodPage-gallery">
          {renderStyles()}
          {RenderShampoo()}
          {RenderConditioner()}
        </div>
      </div>
    </div>
  );
}
