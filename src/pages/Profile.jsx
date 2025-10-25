import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Profile(){
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(()=>{ document.title = 'GreenNest | My Profile'; },[]);

  if (!user) return (
    <div className="container">
      <motion.h2
        style={{
          textAlign: 'center',
          color: '#16a34a',
          textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
          fontSize: '2rem'
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        🌱 Please login to view your profile
      </motion.h2>
    </div>
  );

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: 30 }}
    >
      <motion.div
        style={{
          background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
          padding: 35,
          borderRadius: 25,
          border: '1px solid rgba(22, 163, 74, 0.2)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
          maxWidth: 500,
          margin: '0 auto'
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.img
            src={user.photoURL || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'}
            alt="profile"
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: 20,
              border: '4px solid #16a34a',
              boxShadow: '0 0 30px rgba(22, 163, 74, 0.4)'
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h2
          style={{
            color: '#16a34a',
            fontSize: '2.2rem',
            marginBottom: 15,
            textShadow: '0 0 15px rgba(22, 163, 74, 0.6)'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          {user.displayName || 'Plant Lover'}
        </motion.h2>

        <motion.p
          style={{
            color: '#15803d',
            fontSize: '1.1rem',
            marginBottom: 25,
            textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {user.email}
        </motion.p>

        {/* Plant Collection Stats */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 15,
            marginBottom: 30,
            padding: 20,
            background: 'rgba(22, 163, 74, 0.1)',
            borderRadius: 15,
            border: '1px solid rgba(22, 163, 74, 0.2)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            style={{ textAlign: 'center' }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{
              fontSize: '1.5rem',
              marginBottom: 5
            }}>
              🌱
            </div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#16a34a',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}>
              12
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: '#15803d'
            }}>
              Plants Owned
            </div>
          </motion.div>

          <motion.div
            style={{ textAlign: 'center' }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{
              fontSize: '1.5rem',
              marginBottom: 5
            }}>
              💚
            </div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#16a34a',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}>
              8
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: '#15803d'
            }}>
              Wishlisted
            </div>
          </motion.div>

          <motion.div
            style={{ textAlign: 'center' }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{
              fontSize: '1.5rem',
              marginBottom: 5
            }}>
              📅
            </div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#16a34a',
              textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
            }}>
              3
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: '#15803d'
            }}>
              Consultations
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="button"
            onClick={() => navigate('/update-profile')}
            style={{
              background: 'linear-gradient(135deg, #4ade80, #16a34a)',
              fontSize: '1.1rem',
              padding: '15px 30px',
              boxShadow: '0 8px 25px rgba(74, 222, 128, 0.4)'
            }}
            whileHover={{ scale: 1.05, background: 'linear-gradient(135deg, #16a34a, #4ade80)' }}
            whileTap={{ scale: 0.95 }}
          >
            🌱 Update Profile
          </motion.button>
        </motion.div>

        {/* Plant Care Tips for User */}
        <motion.div
          style={{
            marginTop: 30,
            padding: 20,
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: 15,
            border: '1px solid rgba(34, 197, 94, 0.2)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <motion.h4
            style={{
              color: '#16a34a',
              marginBottom: 10,
              fontSize: '1.1rem'
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💡 Your Plant Care Reminder
          </motion.h4>
          <p style={{
            color: '#15803d',
            fontSize: '0.9rem',
            margin: 0,
            lineHeight: 1.5
          }}>
            Remember to check your plants' soil moisture this weekend and give them some fresh air! 🌿
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
