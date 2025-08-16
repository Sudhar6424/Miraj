// components/ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted }) {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="flipkart-card">
      <div className="image-container" onClick={handleImageClick}>
        <img src={product.image} alt={product.title} className="product-img" />
      </div>

      <div className="product-details">
        <h3 className="title">{product.title}</h3>
        <p className="description">{product.description}</p>
        <p className="price">₹{product.price}</p>

        <div className="button-group">
          <button className="btn-cart" onClick={() => onAddToCart(product)}>
            🛒 Add to Cart
          </button>
          <button className="btn-buy" onClick={() => alert(`Proceeding to buy ${product.title}`)}>
            ⚡ Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
