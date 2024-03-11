import React, { useEffect, useState, Fragment } from "react";
import "./App.css";

import ProductCard from "./components/ProductCard";
import Template from "./Template";
import Login from "./components/Login";

function App() {
  const [products, setProducts] = useState([]);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [cart, setCart] = useState(0);

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
          <Fragment>
            <div className="car-container">
              <h3 className="">Artículos en el carrito: {cart}</h3>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  setCart={setCart}
                />
              ))}
            </div>
          </Fragment>
        ) : (
          <Login setIsUserLogged={setIsUserLogged} />
        )}
      </Template>
    </div>
  );
}

export default App;
