/* eslint-disable react/prop-types */
import React from "react";
import "./index.css";

const ProductCard = ({ product, setCart }) => {
  const handleAddToCart = () => {
    setCart((prevState) => prevState + 1);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h3>{product.title}</h3>

        <p>{product.description}</p>
      </div>

      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
