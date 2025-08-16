import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import ProductCard from "../components/ProductCard";
import products from "../pages/Product";
import Footer from "../components/Footer";

import C1 from "../components/c1.jpg";
import C2 from "../components/c2.jpg";
import C3 from "../components/c3.jpg";

// Slider images
const sliderImages = [
  {
    id: 1,
    src: C1,
    alt: "Citrus Candle",
    caption: "Brighten your space with Citrus Glow",
    link: "/product/1",
  },
  {
    id: 2,
    src: C2,
    alt: "Eucalyptus Candle",
    caption: "Refresh with Eucalyptus Calm",
    link: "/product/2",
  },
  {
    id: 3,
    src: C3,
    alt: "Ocean Breeze Candle",
    caption: "Breathe in the Ocean Breeze",
    link: "/product/3",
  },
];

// 👉 Categories Data
const categories = [
  { id: 1, name: "Scented", img: C1, link: "/scented" },
  { id: 2, name: "Sox Wax", img: C2, link: "/soy-wax" },
  { id: 3, name: "Gifts Sets", img: C3, link: "/gift-sets" },
  { id: 4, name: "Decor", img: C3, link: "/decor" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Auto change slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const onAddToCart = (product) => {
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="home-container">
      {/* Slider */}
      <div className="slider-wrapper">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages.map((slide, index) => (
            <Link to={slide.link} key={index} className="slider-slide">
              {slide.src ? (
                <img src={slide.src} alt={slide.alt} className="slider-image" />
              ) : (
                <div className="slider-fallback">
                  <span>{slide.caption}</span>
                </div>
              )}
              <div className="slider-caption">{slide.caption}</div>
            </Link>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#10095;
        </button>

        {/* Navigation Dots */}
        <div className="dots">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* ✅ Categories Section */}
      <section className="categories-section">
  <div className="categories-header">
    <h2 className="categories-title">Our Categories</h2>
    <Link to="/categories" className="view-all-btn">
      View All →
    </Link>
  </div>
  <div className="categories-row">
    {categories.map((cat) => (
      <Link to={cat.link} key={cat.id} className="category-card">
        <div className="category-img-wrapper">
          <img src={cat.img} alt={cat.name} className="category-img" />
        </div>
        <p className="category-name">{cat.name}</p>
      </Link>
    ))}
  </div>
</section>


      {/* Featured Products */}
      <h1 className="home-title">🕯️ Featured Candles</h1>
      <div className="product-row">
        {products.map((product) => (
          <div className="product-card-wrapper" key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
