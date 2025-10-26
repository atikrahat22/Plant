import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    width: '100%'
  }}>
    <motion.div
      style={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        border: '5px solid #e9ecef',
        borderTopColor: '#4ade80',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

export default LoadingSpinner;
