import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PlantCard({ game: plant }){
  return (
    <motion.div
      className="card"
      style={{ '--delay': Math.floor(Math.random() * 6) }}
      whileHover={{
        y: -15,
        scale: 1.05,
        rotate: 1,
        boxShadow: '0 25px 60px rgba(74, 222, 128, 0.4)'
      }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        style={{ position: 'relative', overflow: 'hidden', borderRadius: 15 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={plant.image}
          alt={plant.plantName}
          style={{
            width:'100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: 15,
            marginBottom: 0
          }}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
          }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(74,222,128,0.3), rgba(22,163,74,0.3))',
            opacity: 0,
            borderRadius: 15
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.8)',
            padding: '8px 12px',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span style={{
            color: '#4ade80',
            fontSize: '0.9rem',
            fontWeight: 700
          }}>
            ⭐ {plant.rating}
          </span>
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            background: 'rgba(0,0,0,0.8)',
            padding: '6px 10px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span style={{
            color: '#16a34a',
            fontSize: '0.8rem',
            fontWeight: 600
          }}>
            💰 ${plant.price}
          </span>
        </motion.div>
      </motion.div>

      <div style={{ padding: '20px 15px 15px' }}>
        <motion.h3
          style={{
            fontSize: '1.25rem',
            marginBottom: 12,
            color: '#16a34a',
            textShadow: '0 0 10px rgba(22, 163, 74, 0.5)',
            lineHeight: 1.3
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {plant.plantName}
        </motion.h3>

        <motion.div
          style={{ marginBottom: 12 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #4ade80, #16a34a)',
            padding: '8px 14px',
            borderRadius: 15,
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'white',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(74, 222, 128, 0.3)'
          }}>
            {plant.category}
          </span>
        </motion.div>

        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 12
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
        >
          <span style={{
            background: 'linear-gradient(135deg, #15803d, #166534)',
            padding: '6px 12px',
            borderRadius: 12,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'white',
            display: 'inline-block',
            boxShadow: '0 3px 10px rgba(21, 128, 61, 0.3)'
          }}>
            {plant.careLevel} Care
          </span>
          <span style={{
            color: '#16a34a',
            fontSize: '0.8rem',
            fontWeight: 600
          }}>
            Stock: {plant.availableStock}
          </span>
        </motion.div>

        <motion.p
          className="small"
          style={{
            marginBottom: 18,
            color: '#15803d',
            fontWeight: 600,
            fontSize: '0.85rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          by {plant.providerName}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to={`/plants/${plant.plantId}`}
            className="button"
            style={{
              display:'block',
              textAlign: 'center',
              width: '100%',
              fontSize: '0.9rem',
              padding: '12px 15px',
              background: 'linear-gradient(135deg, #4ade80, #16a34a)',
              boxShadow: '0 8px 25px rgba(74, 222, 128, 0.4)'
            }}
            whileHover={{
              background: 'linear-gradient(135deg, #16a34a, #4ade80)',
              boxShadow: '0 12px 35px rgba(74, 222, 128, 0.6)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            🌱 View Details
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
