import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Scented from './components/Scented';
import GiftSets from './components/GiftSets';
import SoxWaxProduct from './components/SoyWaxProducts';
import Decor from './components/Decor';
import Aromatherapy from './components/Aromatherapy';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './components/Wishlist';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="cart" element={<Cart cartItems={cart} />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlist" element={<Wishlist onAddToCart={handleAddToCart} />} />
          <Route path="scented" element={<Scented onAddToCart={handleAddToCart} />} />
          <Route path="soy-wax" element={<SoxWaxProduct onAddToCart={handleAddToCart} />} />
          <Route path="gift-sets" element={<GiftSets onAddToCart={handleAddToCart}/>} />
          <Route path="decor" element={<Decor onAddToCart={handleAddToCart}/>} />
          <Route path="aromatherapy" element={<Aromatherapy onAddToCart={handleAddToCart}/>} />
          <Route path="product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
