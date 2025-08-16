import React from 'react';
import { useCart } from '../context/CartContext';
import './CartIcon.css';

const CartIcon = ({ className = '' }) => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className={`cart-icon-container ${className}`}>
      <svg 
        className="cart-svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M9 2C7.89543 2 7 2.89543 7 4C7 5.10457 7.89543 6 9 6H15L16.5 12H19C20.1046 12 21 12.8954 21 14V16C21 17.1046 20.1046 18 19 18H7C5.89543 18 5 17.1046 5 16V14C5 12.8954 5.89543 12 7 12H8.5L10 6H9Z" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <circle 
          cx="9" 
          cy="21" 
          r="1" 
          fill="currentColor"
        />
        <circle 
          cx="20" 
          cy="21" 
          r="1" 
          fill="currentColor"
        />
      </svg>
      {itemCount > 0 && (
        <span className="cart-badge">{itemCount}</span>
      )}
    </div>
  );
};
