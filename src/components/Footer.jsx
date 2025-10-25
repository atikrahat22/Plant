import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

export default function Footer(){
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.h3
          style={{
            fontSize: '1.5rem',
            background: 'linear-gradient(45deg, #4ade80, #16a34a, #15803d)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'rainbow 3s ease-in-out infinite',
            margin: 0,
            textShadow: '0 0 15px rgba(74, 222, 128, 0.5)'
          }}
        >
          🌱 GreenNest
        </motion.h3>
        <motion.p
          style={{
            color: '#16a34a',
            fontSize: '1rem',
            margin: 0,
            textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              '0 0 5px rgba(22, 163, 74, 0.3)',
              '0 0 15px rgba(22, 163, 74, 0.6)',
              '0 0 5px rgba(22, 163, 74, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Grow • Nurture • Thrive
        </motion.p>

        {/* Quick Links Section */}
        <motion.div
          style={{
            display: 'flex',
            gap: '30px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '10px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#"
            style={{
              color: '#16a34a',
              fontSize: '0.9rem',
              textDecoration: 'none',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.1, color: '#4ade80' }}
          >
            About
          </motion.a>
          <motion.a
            href="#"
            style={{
              color: '#16a34a',
              fontSize: '0.9rem',
              textDecoration: 'none',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.1, color: '#4ade80' }}
          >
            Contact
          </motion.a>
          <motion.a
            href="#"
            style={{
              color: '#16a34a',
              fontSize: '0.9rem',
              textDecoration: 'none',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.1, color: '#4ade80' }}
          >
            Privacy Policy
          </motion.a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '10px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.a
            href="#"
            style={{
              color: '#16a34a',
              fontSize: '1.2rem',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.2, color: '#4ade80' }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="#"
            style={{
              color: '#16a34a',
              fontSize: '1.2rem',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.2, color: '#4ade80' }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="#"
            style={{
              color: '#16a34a',
              fontSize: '1.2rem',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.2, color: '#4ade80' }}
          >
            <FaPinterest />
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.span
            style={{
              color: '#16a34a',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.1, color: '#4ade80' }}
          >
            Made with 🌱 & React
          </motion.span>
          <motion.span
            style={{
              color: '#16a34a',
              fontSize: '0.9rem',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}
            whileHover={{ scale: 1.1, color: '#4ade80' }}
          >
            &copy; 2025 GreenNest. All rights reserved.
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}
