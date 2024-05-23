// src/App.js
import React from 'react';
import products from './products';
import Product from './products';
import './App.css';

function App() {
  console.log(products); // Debugging: Überprüfen Sie, ob die Produkte geladen werden
  return (
    <div className="App">
      <h1>Mein Shop</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            imageURL={product.imageURL}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


