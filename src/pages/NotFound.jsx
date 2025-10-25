import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound(){
  useEffect(()=>{ document.title = 'GreenNest | 404 Not Found'; },[]);

  return (
    <motion.div
      className="container"
      style={{
        textAlign: 'center',
        marginTop: 80,
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        style={{
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1))',
          borderRadius: 25,
          border: '2px solid rgba(239, 68, 68, 0.3)',
          marginBottom: 30
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.h1
          style={{
            fontSize: '8rem',
            margin: 0,
            background: 'linear-gradient(45deg, #ef4444, #dc2626, #b91c1c)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'rainbow 2s ease-in-out infinite',
            textShadow: '0 0 40px rgba(239, 68, 68, 0.8)',
            filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          404
        </motion.h1>

        <motion.h2
          style={{
            marginBottom: 20,
            fontSize: '2.5rem',
            color: '#dc2626',
            textShadow: '0 0 20px rgba(220, 38, 38, 0.6)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Oops! Page Not Found
        </motion.h2>

        <motion.p
          style={{
            fontSize: '1.2rem',
            color: '#f59e0b',
            marginBottom: 30,
            maxWidth: 500,
            textShadow: '0 0 10px rgba(245, 158, 11, 0.4)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to exploring amazing plants! 🌱
        </motion.p>
      </motion.div>

      <motion.div
        style={{
          display: 'flex',
          gap: 20,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="button"
            style={{
              background: 'linear-gradient(135deg, #4ade80, #16a34a)',
              fontSize: '1.1rem',
              padding: '15px 30px',
              boxShadow: '0 10px 30px rgba(74, 222, 128, 0.4)'
            }}
          >
            🏠 Go Home
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/all-reviews"
            className="button"
            style={{
              background: 'linear-gradient(135deg, #4ade80, #16a34a)',
              fontSize: '1.1rem',
              padding: '15px 30px',
              boxShadow: '0 10px 30px rgba(74, 222, 128, 0.4)'
            }}
          >
            🌱 Browse Plants
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          marginTop: 40,
          padding: 20,
          background: 'rgba(74, 222, 128, 0.05)',
          borderRadius: 15,
          border: '1px solid rgba(74, 222, 128, 0.2)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.p
          style={{
            color: '#16a34a',
            fontSize: '1rem',
            margin: 0,
            textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
          }}
          animate={{
            textShadow: [
              '0 0 5px rgba(22, 163, 74, 0.3)',
              '0 0 15px rgba(22, 163, 74, 0.6)',
              '0 0 5px rgba(22, 163, 74, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💡 Pro Tip: Try browsing our plant categories to discover amazing indoor plants!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
