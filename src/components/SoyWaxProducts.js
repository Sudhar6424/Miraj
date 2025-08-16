import React from 'react';
import './Scented.css';

const products = [
  { id: 1, name: 'Lavender Candle', price: 299, image: '/images/lavender.jpg', description: 'Relaxing lavender-scented candle to soothe your senses.' },
  { id: 2, name: 'Sandalwood Oil', price: 199, image: '/images/sandalwood.jpg', description: 'Pure sandalwood essential oil for aromatherapy.' },
  { id: 3, name: 'Rose Diffuser', price: 349, image: '/images/rose.jpg', description: 'Elegant rose diffuser to fill your space with floral fragrance.' },
  { id: 4, name: 'Vanilla Incense', price: 99, image: '/images/vanilla.jpg', description: 'Sweet vanilla incense sticks for a warm ambiance.' },
  { id: 5, name: 'Cinnamon Wax Melts', price: 149, image: '/images/cinnamon.jpg', description: 'Cinnamon-scented wax melts for a cozy atmosphere.' },
];

export default function Scented() {
  const buyNow = (product) => {
    alert(`You are buying: ${product.name} for ₹${product.price}`);
  };

  return (
    <div className="scented-container">
      <h1 className="section-title">🌿 Sox Way Products</h1>
      <p className="section-subtitle">
        Explore our range of scented products designed to enhance your space with delightful aromas.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <p className="product-description">{product.description}</p>
              <div className="button-group">
                {/* Removed Add To Cart button */}
                <button className="buy-button" onClick={() => buyNow(product)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
