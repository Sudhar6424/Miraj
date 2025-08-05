import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleBuyNow = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    alert(`Proceeding to buy ${product.title}`);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
        onClick={handleImageClick}
      />
      <h3>{product.title}</h3>
      <p><strong>₹{product.price}</strong></p>
      <div className="action-buttons">
        <button className="add-button" onClick={handleAddToCart}>
          <span className="cart-icon">🛒</span> Add to Cart
        </button>
        <button className="buy-button" onClick={handleBuyNow}>⚡ Buy Now</button>
      </div>
    </div>
  );
}
