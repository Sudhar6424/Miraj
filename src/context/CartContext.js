import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function updateQty(id, qty) {
    setCart(prev =>
      prev.map(p =>
        p.id === id ? { ...p, qty: qty > 0 ? qty : 1 } : p
      )
    );
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}
