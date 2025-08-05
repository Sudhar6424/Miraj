import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaHeart } from 'react-icons/fa';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { MdOutlineShoppingCart } from 'react-icons/md';
import './Navbar.css'; // your CSS file
import MLogo from '../components/MLogo.png'; // your logo image path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0); // useRef to keep state across renders

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
        {/* Left Logo */}
        <div className="navbar__left">
          <div className="navbar__logo">
            <Link to="/">
              <img src={MLogo} alt="Logo" className="logo-image" />
            </Link>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="navbar__center desktop-only">
          <div className="navbar__search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search for candles, scents..."
              aria-label="Search"
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="navbar__right desktop-only">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/wishlist" onClick={closeMenu}>
            <FaHeart style={{ marginRight: '5px' }} /> Wishlist
          </Link>
          <Link to="/cart" onClick={closeMenu}>
            <MdOutlineShoppingCart style={{ marginRight: '5px' }} /> Cart
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="navbar__toggle mobile-only"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <AiOutlineMenuFold size={24} color="black" />
          ) : (
            <FaBars size={24} color="black" />
          )}
        </button>
      </nav>

      {/* Mobile Search */}
      <div className="mobile-search-container mobile-only">
        <div className="navbar__search">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search for candles, scents..."
            aria-label="Search"
          />
        </div>
      </div>

      {/* Overlay for mobile menu */}
      <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      {/* Side menu */}
      <aside className={`sidemenu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/wishlist" onClick={closeMenu}>Wishlist</Link>
        <Link to="/cart" onClick={closeMenu}>Cart</Link>
        <button className="close-btn" onClick={closeMenu}>Close</button>
      </aside>
    </>
  );
};

export default Navbar;