import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-intro">
        Welcome to <strong>Glow & Aroma</strong> — your destination for handcrafted,
        eco-friendly candles that bring warmth and comfort to your space.
      </p>

      <section className="about-section">
        <h2>🌿 Our Story</h2>
        <p>
          Our journey began with a love for natural scents and the desire to create
          candles that are as beautiful as they are sustainable. Every candle is
          hand-poured with care, using soy wax and clean fragrances.
        </p>
      </section>

      <section className="about-section">
        <h2>🕯️ What We Offer</h2>
        <ul>
          <li>Hand-poured soy candles</li>
          <li>Unique and seasonal fragrances</li>
          <li>Eco-friendly packaging</li>
          <li>Custom candle designs for special occasions</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>💛 Our Mission</h2>
        <p>
          We believe in creating moments of calm and joy through the simple act of
          lighting a candle. Our mission is to make your home smell amazing — while
          being kind to the planet.
        </p>
      </section>
    </div>
  );
}
