import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBars, FaTimes, FaSearch, FaHeart, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdPhoneAndroid } from 'react-icons/md'; 
import './Navbar.css';
import MLogo from '../components/MLogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    document.body.classList.toggle('menu-open', !menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;
      // show when scrolling up, hide when down (Flipkart-like)
      if (current > lastScrollY.current && current > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        {/* LEFT: logo */}
        <div className="navbar__left">
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={MLogo} alt="Logo" />
          </Link>
        </div>

        <div className="navbar__center">
          <div className="navbar__search desktop-only">
            <FaSearch className="search-icon" />
            <input className="search-input" placeholder="Search for candles, scents..." />
          </div>
        </div>

        {/* RIGHT: desktop links (hidden on mobile) */}
        <div className="navbar__right desktop-only">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/wishlist" onClick={closeMenu}><FaHeart style={{ marginRight: 6 }} /> Wishlist</Link>
          <Link to="/cart" onClick={closeMenu}><MdOutlineShoppingCart style={{ marginRight: 6 }} /> Cart</Link>
        </div>


        <button
          className="navbar__toggle mobile-only"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      <div className="mobile-search-container mobile-only">
        <div className="navbar__search">
          <FaSearch className="search-icon" />
          <input className="search-input" placeholder="Search for candles, scents..." />
        </div>
      </div>

      {/* overlay + side menu */}
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      <aside className={`sidemenu ${menuOpen ? 'open' : ''}`}>
        <div className="sidemenu__content">
          <Link to="/" onClick={closeMenu}><FaHome /> Home</Link>
          <Link to="/wishlist" onClick={closeMenu}><FaHeart /> Wishlist</Link>
          <Link to="/cart" onClick={closeMenu}><FaShoppingCart /> Cart</Link>
          <Link to="/about" onClick={closeMenu}><FaInfoCircle /> About Us</Link>
          <Link to="/contact" onClick={closeMenu}><MdPhoneAndroid size={24} /> Contact</Link>
        </div>
      </aside>


    </>
  );
};

export default Navbar;
