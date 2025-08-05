import React, { useEffect, useState } from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';
import  products  from '../pages/Product'; // 

import C1 from '../components/c1.jpg';
import C2 from '../components/c2.jpg';
import C3 from '../components/c3.jpg';

/* ---------- slider data ---------- */
const sliderImages = [
  {
    id: 1,
    src: C1,
    alt: 'Lavender Candle',
    caption: 'Relax with soothing Lavender',
  },
  {
    id: 2,
    src: C2,
    alt: 'Rose Blossom Candle',
    caption: 'Fall in love with Rose Blossom',
  },
  {
    id: 3,
    src: C3,
    alt: 'Vanilla Bean Candle',
    caption: 'Cozy up with Vanilla Bean',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const onAddToCart = (product) => {
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="home-container">
      {/* ---------- HERO SLIDER ---------- */}
      <div className="slider-wrapper">
        <img
          src={sliderImages[currentSlide].src}
          alt={sliderImages[currentSlide].alt}
          className="slider-image"
        />
        <div className="slider-caption">{sliderImages[currentSlide].caption}</div>
      </div>

      {/* ---------- PRODUCT GRID ---------- */}
      <h1 className="home-title">🕯️ Featured Candles</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
