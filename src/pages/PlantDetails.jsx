import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function PlantDetails(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [plants, setPlants] = useState([]);
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetch('/plants.json')
      .then(r=>r.json())
      .then(list=> {
        setPlants(list);
        const foundPlant = list.find(p=>p.plantId===parseInt(id));
        if (foundPlant) {
          setPlant(foundPlant);
          document.title = `GreenNest | ${foundPlant.plantName}`;
        } else {
          navigate('/404');
        }
      })
      .catch(()=>{});
  },[id, navigate]);

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('🌱 Consultation booked successfully! Our expert will contact you soon.');
      setConsultationForm({ name: '', email: '' });
    } catch (error) {
      toast.error('Failed to book consultation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value
    });
  };

  if (!plant) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: 60 }}>
        <motion.h2
          style={{
            color: '#16a34a',
            textShadow: '0 0 20px rgba(22, 163, 74, 0.6)',
            fontSize: '2.5rem'
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading plant details...
        </motion.h2>
      </div>
    );
  }

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: 30 }}
    >
      <motion.button
        onClick={() => navigate(-1)}
        className="button"
        style={{
          marginBottom: 25,
          background: 'rgba(22,163,74,0.1)',
          color: '#16a34a',
          border: '1px solid rgba(22, 163, 74, 0.3)'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Plants
      </motion.button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
        {/* Plant Info Section */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
            padding: 30,
            borderRadius: 25,
            border: '1px solid rgba(22, 163, 74, 0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            style={{
              marginBottom: 20,
              fontSize: '3rem',
              color: '#16a34a',
              textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
              textAlign: 'center'
            }}
          >
            {plant.plantName}
          </motion.h1>

          <motion.img
            src={plant.image}
            alt={plant.plantName}
            style={{
              width:'100%',
              maxHeight: 400,
              objectFit:'cover',
              borderRadius: 20,
              marginBottom: 25,
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
            }}
          />

          <motion.div
            style={{
              display: 'flex',
              gap: 15,
              marginBottom: 25,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #4ade80, #16a34a)',
                padding: '12px 20px',
                borderRadius: 15,
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'white',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 25px rgba(74, 222, 128, 0.4)'
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {plant.category}
            </motion.span>
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #15803d, #166534)',
                padding: '12px 20px',
                borderRadius: 15,
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'white',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 25px rgba(21, 128, 61, 0.4)'
              }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              ⭐ {plant.rating} Rating
            </motion.span>
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #16a34a, #15803d)',
                padding: '12px 20px',
                borderRadius: 15,
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'white',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 25px rgba(22, 163, 74, 0.4)'
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              💰 ${plant.price}
            </motion.span>
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                padding: '12px 20px',
                borderRadius: 15,
                fontWeight: 700,
                fontSize: '0.9rem',
                color: 'white',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)'
              }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              📦 {plant.availableStock} in Stock
            </motion.span>
          </motion.div>

          <motion.div
            style={{
              display: 'flex',
              gap: 15,
              marginBottom: 25,
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #15803d, #166534)',
                padding: '8px 16px',
                borderRadius: 12,
                fontWeight: 600,
                fontSize: '0.8rem',
                color: 'white',
                boxShadow: '0 4px 15px rgba(21, 128, 61, 0.3)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              {plant.careLevel} Care
            </motion.span>
            <motion.span
              style={{
                background: 'linear-gradient(135deg, #166534, #14532d)',
                padding: '8px 16px',
                borderRadius: 12,
                fontWeight: 600,
                fontSize: '0.8rem',
                color: 'white',
                boxShadow: '0 4px 15px rgba(20, 83, 45, 0.3)'
              }}
              whileHover={{ scale: 1.05 }}
            >
              by {plant.providerName}
            </motion.span>
          </motion.div>

          <motion.h3
            style={{
              marginTop: 30,
              marginBottom: 15,
              fontSize: '2rem',
              color: '#16a34a',
              textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            About This Plant
          </motion.h3>
          <motion.p
            style={{
              lineHeight: 1.8,
              fontSize: '1.1rem',
              marginBottom: 30,
              textAlign: 'justify',
              color: '#15803d',
              textShadow: '0 0 5px rgba(21, 128, 61, 0.2)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {plant.description}
          </motion.p>
        </motion.div>

        {/* Consultation Booking Section */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
            padding: 30,
            borderRadius: 25,
            border: '1px solid rgba(22, 163, 74, 0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h3
            style={{
              fontSize: '2rem',
              color: '#16a34a',
              textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
              textAlign: 'center',
              marginBottom: 20
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            🌟 Book Plant Consultation
          </motion.h3>

          <motion.p
            style={{
              textAlign: 'center',
              marginBottom: 25,
              color: '#15803d',
              fontSize: '1rem',
              lineHeight: 1.6
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Get personalized advice from our plant care experts to help your plants thrive!
          </motion.p>

          <motion.form
            onSubmit={handleConsultationSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label
                style={{
                  color: '#15803d',
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginBottom: 8,
                  display: 'block',
                  textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
                }}
              >
                👤 Your Name
              </label>
              <input
                className="input"
                placeholder="Enter your full name"
                name="name"
                value={consultationForm.name}
                onChange={handleFormChange}
                style={{
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  background: 'rgba(22, 163, 74, 0.1)',
                  color: '#16a34a',
                  textAlign: 'center',
                  fontWeight: 600,
                  marginBottom: 15,
                  width: '100%'
                }}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label
                style={{
                  color: '#15803d',
                  fontWeight: 600,
                  fontSize: '1rem',
                  marginBottom: 8,
                  display: 'block',
                  textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
                }}
              >
                📧 Email Address
              </label>
              <input
                className="input"
                placeholder="Enter your email address"
                type="email"
                name="email"
                value={consultationForm.email}
                onChange={handleFormChange}
                style={{
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  background: 'rgba(22, 163, 74, 0.1)',
                  color: '#16a34a',
                  textAlign: 'center',
                  fontWeight: 600,
                  marginBottom: 20,
                  width: '100%'
                }}
                required
              />
            </motion.div>

            <motion.button
              className="button"
              type="submit"
              disabled={loading}
              style={{
                background: 'linear-gradient(135deg, #4ade80, #16a34a)',
                fontSize: '1.2rem',
                padding: '15px 30px',
                width: '100%',
                opacity: loading ? 0.7 : 1,
                boxShadow: loading ? 'none' : '0 8px 25px rgba(74, 222, 128, 0.4)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
            >
              {loading ? '🔄 Booking...' : '🌱 Book Consultation'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}
