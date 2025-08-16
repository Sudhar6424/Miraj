// src/components/ProductDetailView.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../pages/Product'; // Array of product objects
import './ProductDetailView.css';
import Footer from './Footer.js';

export default function ProductDetailView({ product }) {
  const [reviews, setReviews] = useState([
    { name: 'Aarav', comment: 'Lovely fragrance and packaging!' },
    { name: 'Diya', comment: 'Perfect for gifting!' }
  ]);
  const [newReview, setNewReview] = useState('');
  const [message, setMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Show temporary message
  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleAddToCart = (selectedProduct = product) => {
    showMessage(`${quantity} x ${selectedProduct.title} added to cart!`);
  };

  const handleBuyNow = () => {
    showMessage(`Thank you for purchasing ${quantity} x ${product.title}!`);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '') {
      setReviews([...reviews, { name: 'You', comment: newReview }]);
      setNewReview('');
      showMessage('Review posted successfully!');
    }
  };

  const shareProduct = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: 'Check out this amazing candle!',
        url: window.location.href
      });
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  return (
    <div className="product-detail-container">
      {message && <div className="message-box">{message}</div>}

      {/* Product Details */}
      <div className="product-card">
        <div className="left">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail-image"
          />
        </div>
        <div className="right">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹{product.price}</p>

          <div className="product-extra">
            <div className="ratings">⭐️⭐️⭐️⭐️☆ (4.0)</div>
            <div className="quantity-selector">
              <label>Qty:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="share-buttons">
            <button onClick={shareProduct} className="share-button">
              🔗 Share
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="add-button" onClick={() => handleAddToCart(product)}>
          🛒 Add to Cart
        </button>
        <button className="buy-button" onClick={handleBuyNow}>
          ⚡ Buy Now
        </button>
      </div>

      {/* Reviews */}
      <div className="review-section">
        <h2 className="review-title">Customer Reviews 📝</h2>
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.name}:</strong> {review.comment}
            </li>
          ))}
        </ul>

        <form onSubmit={handleReviewSubmit} className="review-form">
          <input
            type="text"
            placeholder="Write a review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="review-input"
          />
          <button type="submit" className="post-button">Post</button>
        </form>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="product-row">
          {products.map((item) => (
            <div className="product-card-wrapper" key={item.id}>
              <ProductCard
                product={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="related-products">
        <div className="product-row">
          {products.map((item) => (
            <div className="product-card-wrapper" key={item.id}>
              <ProductCard
                product={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="related-products">
        <div className="product-row">
          {products.map((item) => (
            <div className="product-card-wrapper" key={item.id}>
              <ProductCard
                product={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="related-products">
        <div className="product-row">
          {products.map((item) => (
            <div className="product-card-wrapper" key={item.id}>
              <ProductCard
                product={item}
                onAddToCart={() => handleAddToCart(item)}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
