import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaLeaf, FaShoppingCart, FaBoxOpen, FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function PlantCard({ plant }) {
  return (
    <motion.div
      className="plant-card premium-card"
      onClick={() => {
        toast.success(`🌱 View details for ${plant.plantName}!`);
        window.location.href = `/plants/${plant.plantId}`;
      }}
    >
      {/* Premium Badge */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
        color: 'darkgreen',
        padding: '5px 10px',
        borderRadius: '15px',
        fontSize: '0.7rem',
        fontWeight: 'bold',
        zIndex: 2,
        boxShadow: '0 4px 15px rgba(255,215,0,0.4)'
      }}>
        ⭐ Premium
      </div>

      {/* Image with Glow Effect */}
      <div className="plant-image-container" style={{ position: 'relative' }}>
        <img
          src={plant.imageUrl}
          alt={plant.plantName}
          className="plant-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
          }}
        />
        <div className="image-glow" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(74,222,128,0.1), rgba(34,197,94,0.1))',
          pointerEvents: 'none'
        }}></div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h3 className="plant-name">
          {plant.plantName}
        </h3>
        <p className="plant-category">
          {plant.category}
        </p>

        {/* Features */}
        {plant.features && (
          <div className="plant-features" style={{ margin: '10px 0', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {plant.features.slice(0, 2).map((feature, i) => (
              <span key={i} className="feature-tag" style={{
                background: 'rgba(34,197,94,0.1)',
                color: '#22c55e',
                padding: '3px 8px',
                borderRadius: '10px',
                fontSize: '0.7rem',
                fontWeight: '500'
              }}>
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Care Level and Stock */}
        <div className="plant-details">
          <div className="detail-item">
            <FaLeaf style={{ marginRight: '5px', color: 'green' }} />
            <span>{plant.careLevel} Care</span>
          </div>
          <div className="detail-item">
            <FaBoxOpen style={{ marginRight: '5px', color: 'orange' }} />
            <span>{plant.availableStock} in stock</span>
          </div>
        </div>

        {/* Rating */}
        <div className="rating-section">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              style={{ color: i < Math.floor(plant.rating) ? 'gold' : 'gray', marginRight: '2px' }}
            />
          ))}
          <span className="rating-value">{plant.rating}</span>
        </div>

        {/* Price */}
        <p className="plant-price">
          ${plant.price}
        </p>

        {/* Buttons */}
        <div className="card-buttons">
          <motion.button
            className="add-to-cart-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              const cart = JSON.parse(localStorage.getItem('cart') || '[]');
              cart.push(plant);
              localStorage.setItem('cart', JSON.stringify(cart));
              toast.success(`🛒 ${plant.plantName} added to cart!`);
            }}
          >
            <FaShoppingCart style={{ marginRight: '5px' }} />
            Add to Cart
          </motion.button>
          <motion.button
            className="wishlist-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
              if (!wishlist.find(item => item.plantId === plant.plantId)) {
                wishlist.push(plant);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                toast.success(`❤️ ${plant.plantName} added to wishlist!`);
              } else {
                toast.info(`❤️ ${plant.plantName} is already in wishlist!`);
              }
            }}
          >
            <FaHeart />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
