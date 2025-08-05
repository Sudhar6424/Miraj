// src/components/ProductDetailView.js
import React, { useState } from 'react';
import './ProductDetailView.css';

export default function ProductDetailView({ product }) {
  const [reviews, setReviews] = useState([
    { name: 'Aarav', comment: 'Lovely fragrance and packaging!' },
    { name: 'Diya', comment: 'Perfect for gifting!' }
  ]);
  const [newReview, setNewReview] = useState('');
  const [message, setMessage] = useState('');
  const [quantity, setQuantity] = useState(1);

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleAddToCart = () => {
    showMessage(`${quantity} x ${product.title} added to cart!`);
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
    navigator.share?.({
      title: product.title,
      text: 'Check out this amazing candle!',
      url: window.location.href
    }) || alert("Sharing is not supported in this browser.");
  };

  return (
    <div className="product-detail-container">
      {message && <div className="message-box">{message}</div>}

      <div className="product-card">
        <div className="left">
          <img src={product.image} alt={product.title} className="product-detail-image" />
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
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <div className="share-buttons">
            <button onClick={shareProduct} className="share-button">🔗 Share</button>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <button className="add-button" onClick={handleAddToCart}>🛒 Add to Cart</button>
        <button className="buy-button" onClick={handleBuyNow}>⚡ Buy Now</button>
      </div>

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
    </div>
  );
}
