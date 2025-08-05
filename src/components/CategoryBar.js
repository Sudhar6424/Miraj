// src/components/CategoryBar.js
import React from 'react';
import './CategoryBar.css';

const categories = [
  { label: 'Scented', icon: '🕯️' },
  { label: 'Soy Wax', icon: '🌿' },
  { label: 'Gift Sets', icon: '🎁' },
  { label: 'Decor', icon: '🏡' },
  { label: 'Aromatherapy', icon: '💧' },
];

function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((cat, i) => (
        <div key={i} className="category-item">
          <div className="category-icon">{cat.icon}</div>
          <span className="category-label">{cat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;
