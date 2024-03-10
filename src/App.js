import React, { useEffect, useState } from "react";
import "./App.css";

import ProductCard from "./components/ProductCard";
import Template from "./Template";
import Login from "./components/Login";

function App() {
  const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isUserLogged, setIsUserLogged] = useState(false);

  //const users = [{ name: "test", password: "test", email: "test@test.test" }];

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
        <h2>Daniel Martinez</h2>

        {isUserLogged ? (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <Login />
        )}
      </Template>
    </div>
  );
}

export default App;
