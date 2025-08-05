// src/pages/Cart.js
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Cart() {
  const location = useLocation();
  const cartItems = location.state?.cart || [];

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>🛒 Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{item.title}</strong> - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
