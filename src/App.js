import React, { useEffect, useState } from "react";
import "./App.css";

import ProductCard from "./components/ProductCard";
import Template from "./Template";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  useEffect(async () => {
    const data = await getProducts();
    setProducts(data);
  }, []);

  return (
    <div className="App">
      <Template>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Template>
    </div>
  );
}

export default App;
