import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaSignOutAlt, FaHeart, FaSearch, FaLeaf } from 'react-icons/fa';

export default function Header() {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/plants', label: 'Plants', icon: '🌿' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        padding: '0 20px'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 0',
        position: 'relative'
      }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <Link to="/" className="logo" style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #22c55e, #16a34a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FaLeaf style={{ color: '#22c55e' }} />
            GreenNest
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="nav-links" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.path}
                className="nav-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: '500',
                  padding: '10px 15px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(34, 197, 94, 0.1)';
                  e.target.style.color = '#22c55e';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#333';
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
                {/* Active indicator */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0%',
                    height: '3px',
                    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                    borderRadius: '2px'
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}

          {/* Search Bar */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.05)',
              borderRadius: '25px',
              padding: '8px 15px',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <FaSearch style={{ color: '#666', marginRight: '8px' }} />
            <input
              type="text"
              placeholder="Search plants..."
              style={{
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: '0.9rem',
                width: '150px'
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  // Handle search
                  console.log('Search:', e.target.value);
                }
              }}
            />
          </motion.div>
        </nav>

        {/* Right Side Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          {/* Cart */}
          <motion.button
            style={{
              background: 'transparent',
              border: 'none',
              padding: '10px',
              borderRadius: '10px',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ scale: 1.1, background: 'rgba(34, 197, 94, 0.1)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // Handle cart click
              console.log('Cart clicked');
            }}
          >
            <FaShoppingCart style={{ fontSize: '1.2rem', color: '#333' }} />
            {/* Cart count badge */}
            <motion.span
              style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ef4444',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '0.7rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              0
            </motion.span>
          </motion.button>

          {/* Wishlist */}
          <motion.button
            style={{
              background: 'transparent',
              border: 'none',
              padding: '10px',
              borderRadius: '10px',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ scale: 1.1, background: 'rgba(239, 68, 68, 0.1)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              // Handle wishlist click
              console.log('Wishlist clicked');
            }}
          >
            <FaHeart style={{ fontSize: '1.2rem', color: '#333' }} />
          </motion.button>

          {user ? (
            <div style={{ position: 'relative' }}>
              {/* Profile Avatar */}
              <motion.div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.1,
                  border: '2px solid #22c55e',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.3)'
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <img
                  src={user.photoURL || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80'}
                  alt="profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>

              {/* Profile Dropdown */}
              <AnimatePresence>
                {isProfileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '50px',
                      right: '0',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '15px',
                      padding: '15px',
                      minWidth: '200px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      zIndex: 1001
                    }}
                  >
                    <div style={{
                      padding: '10px 0',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                      marginBottom: '10px'
                    }}>
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '5px'
                      }}>
                        Welcome back!
                      </div>
                      <div style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#333'
                      }}>
                        {user.displayName || user.email}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <motion.button
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 15px',
                          background: 'transparent',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          color: '#333',
                          transition: 'all 0.2s ease'
                        }}
                        whileHover={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          navigate('/my-profile');
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        <FaUser />
                        My Profile
                      </motion.button>

                      <motion.button
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 15px',
                          background: 'transparent',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          color: '#333',
                          transition: 'all 0.2s ease'
                        }}
                        whileHover={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          handleLogout();
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        <FaSignOutAlt />
                        Logout
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="button login-btn"
                  style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Login
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="button register-btn"
                  style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Join Premium
                </Link>
              </motion.div>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <motion.button
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              padding: '10px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            whileHover={{ background: 'rgba(0, 0, 0, 0.05)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              padding: '20px',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              zIndex: 1000
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px',
                    color: '#333',
                    textDecoration: 'none',
                    fontWeight: '500',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(34, 197, 94, 0.1)';
                    e.target.style.color = '#22c55e';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#333';
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}

              {!user && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  <Link
                    to="/login"
                    style={{
                      padding: '12px 20px',
                      background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                      color: 'white',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    style={{
                      padding: '12px 20px',
                      background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                      color: 'white',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Premium
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </motion.header>
  );
}
