import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagenotfound from "./pages/Pagenotfound.js";


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
    toast.success(`${product.title} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((p) => (p.id === productId ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0); 
      return updatedCart;
    });
    toast.error(`Item removed from cart!`);
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
      <ToastContainer position="top-center" autoClose={1500} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/Ecommerce-app"  element={<Home addToCart={addToCart} />} />
        <Route path="*" element={<Pagenotfound/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
