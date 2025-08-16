import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-intro">
        Have a question about our candles or your order?  
        We’d love to hear from you!
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>📍 Our Store</h2>
          <p>123 Candlelight Lane, Glowtown</p>

          <h2>📞 Call Us</h2>
          <p>(555) 123-4567</p>

          <h2>📧 Email</h2>
          <p>support@glowandaroma.com</p>
        </div>
      </div>
    </div>
  );
}
