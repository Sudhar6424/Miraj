import React, { useState } from 'react';
import './Wishlist.css';

const initialWishlist = [
  {
    id: 1,
    title: 'Vanilla Bean Candle',
    description: 'A cozy and warm-scented candle for a relaxing evening.',
    image: '/images/vanilla.jpg',
    badge: 'New',
  },
  {
    id: 2,
    title: 'Lavender Blossom Candle',
    description: 'Soothing lavender fragrance for peaceful sleep.',
    image: '/images/lavender.jpg',
    badge: 'Limited',
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [rotateHeart, setRotateHeart] = useState(false);

  const handleRemove = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const triggerHeartRotation = () => {
    setRotateHeart(true);
    setTimeout(() => setRotateHeart(false), 1000); // Stop after animation duration
  };

  return (
    <div className="wishlist-container">
      <h1
        className="wishlist-title"
        onClick={triggerHeartRotation} // Rotate when clicked
      >
        <span className={`heart-icon ${rotateHeart ? 'rotate' : ''}`}>🤍</span> My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="empty-message">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-item">
              {item.badge && <span className="card-badge">{item.badge}</span>}
              <img src={item.image} alt={item.title} className="wishlist-img" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                <i className="fas fa-trash"></i> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
