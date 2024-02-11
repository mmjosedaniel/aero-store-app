import React from "react";
import "./App.css";

import ProductCard from "./components/ProductCard";

function App() {
  const productsData = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del Producto 1",
      imageUrl:
        "https://contents.mediadecathlon.com/p1723889/k$c35ad7aa8761d5e5ca8b27e44c6979d1/maleta-de-montana-y-trekking-viaje-forclaz-50050litrosfunda-impermeablemujer.jpg?format=auto&quality=40&f=800x800",
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del Producto 2",
      imageUrl:
        "https://contents.mediadecathlon.com/p1723889/k$c35ad7aa8761d5e5ca8b27e44c6979d1/maleta-de-montana-y-trekking-viaje-forclaz-50050litrosfunda-impermeablemujer.jpg?format=auto&quality=40&f=800x800",
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción del Producto 3",
      imageUrl:
        "https://contents.mediadecathlon.com/p1723889/k$c35ad7aa8761d5e5ca8b27e44c6979d1/maleta-de-montana-y-trekking-viaje-forclaz-50050litrosfunda-impermeablemujer.jpg?format=auto&quality=40&f=800x800",
    },
    {
      id: 4,
      name: "Producto 4",
      description: "Descripción del Producto 4",
      imageUrl:
        "https://contents.mediadecathlon.com/p1723889/k$c35ad7aa8761d5e5ca8b27e44c6979d1/maleta-de-montana-y-trekking-viaje-forclaz-50050litrosfunda-impermeablemujer.jpg?format=auto&quality=40&f=800x800",
    },
    {
      id: 5,
      name: "Producto 5",
      description: "Descripción del Producto 5",
      imageUrl:
        "https://contents.mediadecathlon.com/p1723889/k$c35ad7aa8761d5e5ca8b27e44c6979d1/maleta-de-montana-y-trekking-viaje-forclaz-50050litrosfunda-impermeablemujer.jpg?format=auto&quality=40&f=800x800",
    },
    {
      id: 6,
      name: "Producto 6",
      description: "Descripción del Producto 6",
      imageUrl:
        "https://contents.mediadecathlon.com/p1723889/k$c35ad7aa8761d5e5ca8b27e44c6979d1/maleta-de-montana-y-trekking-viaje-forclaz-50050litrosfunda-impermeablemujer.jpg?format=auto&quality=40&f=800x800",
    },
  ];

  return (
    <div className="App">
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
