import React from 'react';
import './CategoryBar.css';
import { useNavigate } from 'react-router-dom';

const categories = [
  {label: 'Home', icon: '🛍️', link: '/' },
  { label: 'Scented', icon: '🕯️', link: '/scented' },
  { label: 'Soy Wax', icon: '🌿', link: '/soy-wax' },
  { label: 'Gift Sets', icon: '🎁', link: '/gift-sets' },
  { label: 'Decor', icon: '🏡', link: '/decor' },
  { label: 'Aromatherapy', icon: '💧', link: '/aromatherapy' },
];

function CategoryBar() {
  const navigate = useNavigate();

  return (
    <div className="category-bar">
      {categories.map((cat, index) => (
        <button
          key={index}
          className="category-item"
          onClick={() => navigate(cat.link)}
          type="button"
        >
          <div className="category-icon">{cat.icon}</div>
          <span className="category-label">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}

export default CategoryBar;
