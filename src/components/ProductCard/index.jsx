/* eslint-disable react/prop-types */
import React from "react";
import "../../App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
