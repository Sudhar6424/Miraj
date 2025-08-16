// src/pages/Cart.js
import React from 'react';

export default function Cart({ cartItems = [] }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{item.title}</strong> - ₹{item.price} x {item.quantity || 1}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
