// components/Footer.js
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/terms">Terms & Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/shipping">Shipping & Returns</a></li>
          <li><a href="/faq">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: support@candleshop.com</p>
        <p>Phone: +91-123-456-7890</p>
        <p>Address: 123 Candle Lane, Glow City, India</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Candle Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
