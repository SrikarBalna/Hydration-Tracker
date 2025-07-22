import React, { useState } from 'react';
import { Link , useLocation} from 'react-router-dom'
import { Menu, X, Droplets, Search } from 'lucide-react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
const navigate = useNavigate();
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <Droplets className="navbar-logo-icon" />
            <span className="navbar-logo-text">Hydro Tracker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            <div className="navbar-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`navbar-nav-item ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="navbar-buttons">
              <Link to="/login" className="navbar-login-btn">
                Login
              </Link>
              <Link to='/signup' className="navbar-signup-btn">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar-mobile-btn"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>


        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="navbar-mobile">
            <div className="navbar-mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`navbar-mobile-nav-item ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="navbar-mobile-buttons">
                <Link to="/login" className="navbar-mobile-login-btn" onClick={() => console.log('Login clicked')}>
                  Login
                </Link>
                <Link to="/signup" className="navbar-mobile-signup-btn" onClick={() => console.log('Sign Up clicked')}>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;