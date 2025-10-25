import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Banner from '../components/Banner';
import PlantCard from '../components/PlantCard';

export default React.memo(function HomeComponent(){
  const [plants, setPlants] = useState([]);

  useEffect(()=>{
    fetch('/plants.json')
      .then(r=>r.json())
      .then(setPlants)
      .catch(()=>setPlants([]));
    document.title = 'GreenNest | Home';
  },[]);

  const topRated = [...plants].sort((a,b)=> parseFloat(b.rating)-parseFloat(a.rating)).slice(0,8);

  return (
    <main>
      <Banner />

      <motion.section
        className="container"
        style={{ marginTop: 50 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          style={{
            fontSize: '2.5rem',
            color: '#16a34a',
            textShadow: '0 0 20px rgba(22, 163, 74, 0.6)',
            textAlign: 'center',
            marginBottom: 25
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌱 Top Rated Indoor Plants
        </motion.h2>
        <motion.div
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {topRated.map((plant, index) => (
            <motion.div
              key={plant.plantId}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <PlantCard game={plant} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="container"
        style={{
          marginTop: 60,
          textAlign: 'center'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.h3
          style={{
            fontSize: '2rem',
            color: '#16a34a',
            textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
            marginBottom: 15
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌿 Stay Updated with Plant Care
        </motion.h3>
        <motion.p
          className="small"
          style={{
            fontSize: '1.1rem',
            color: '#15803d',
            marginBottom: 25,
            textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Get weekly plant care tips, seasonal guides, and exclusive offers on new plant arrivals!
        </motion.p>
        <motion.form
          className="form"
          onSubmit={(e)=>{ e.preventDefault(); toast.success('🌱 Successfully subscribed to plant care tips!'); }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
            border: '2px solid rgba(22, 163, 74, 0.3)'
          }}
        >
          <motion.input
            className="input"
            placeholder="Enter your email address"
            type="email"
            required
            style={{
              border: '1px solid rgba(22, 163, 74, 0.3)',
              background: 'rgba(22, 163, 74, 0.1)',
              color: '#16a34a',
              textAlign: 'center',
              fontWeight: 600
            }}
            whileFocus={{ scale: 1.02, borderColor: '#16a34a' }}
          />
          <motion.button
            className="button"
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #4ade80, #16a34a)',
              fontSize: '1.1rem',
              padding: '15px 30px',
              boxShadow: '0 8px 25px rgba(74, 222, 128, 0.4)'
            }}
            whileHover={{ scale: 1.05, background: 'linear-gradient(135deg, #16a34a, #4ade80)' }}
            whileTap={{ scale: 0.95 }}
          >
            🌱 Subscribe Now
          </motion.button>
        </motion.form>
      </motion.section>

      {/* Plant Care Tips Section */}
      <motion.section
        className="container"
        style={{
          marginTop: 60,
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
          borderRadius: 20,
          padding: 40,
          border: '1px solid rgba(22, 163, 74, 0.2)'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.h3
          style={{
            fontSize: '2rem',
            color: '#16a34a',
            textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
            marginBottom: 30
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💡 Essential Plant Care Tips
        </motion.h3>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 30,
            marginTop: 30
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 15,
              padding: 25,
              boxShadow: '0 8px 25px rgba(22, 163, 74, 0.2)',
              border: '1px solid rgba(22, 163, 74, 0.1)'
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              style={{
                fontSize: '2.5rem',
                marginBottom: 15
              }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              💧
            </motion.div>
            <h4 style={{ color: '#16a34a', marginBottom: 10, fontSize: '1.2rem' }}>Watering Guide</h4>
            <p style={{ color: '#15803d', lineHeight: 1.6 }}>
              Check soil moisture 2 inches deep. Water when dry, but avoid overwatering. Most plants prefer being slightly dry rather than constantly wet.
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 15,
              padding: 25,
              boxShadow: '0 8px 25px rgba(22, 163, 74, 0.2)',
              border: '1px solid rgba(22, 163, 74, 0.1)'
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              style={{
                fontSize: '2.5rem',
                marginBottom: 15
              }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              ☀️
            </motion.div>
            <h4 style={{ color: '#16a34a', marginBottom: 10, fontSize: '1.2rem' }}>Light Requirements</h4>
            <p style={{ color: '#15803d', lineHeight: 1.6 }}>
              Bright indirect light is ideal for most houseplants. South-facing windows provide strong light, while north-facing offer gentle illumination.
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 15,
              padding: 25,
              boxShadow: '0 8px 25px rgba(22, 163, 74, 0.2)',
              border: '1px solid rgba(22, 163, 74, 0.1)'
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              style={{
                fontSize: '2.5rem',
                marginBottom: 15
              }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              🌱
            </motion.div>
            <h4 style={{ color: '#16a34a', marginBottom: 10, fontSize: '1.2rem' }}>Fertilizing</h4>
            <p style={{ color: '#15803d', lineHeight: 1.6 }}>
              Feed plants during growing season (spring/summer) with balanced fertilizer. Reduce feeding in fall/winter when growth slows down.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Green Experts Section */}
      <motion.section
        className="container"
        style={{
          marginTop: 60,
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.h3
          style={{
            fontSize: '2rem',
            color: '#16a34a',
            textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
            marginBottom: 30
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌟 Meet Our Green Experts
        </motion.h3>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 30,
            marginTop: 30
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
              borderRadius: 20,
              padding: 25,
              border: '1px solid rgba(22, 163, 74, 0.2)',
              textAlign: 'center'
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Sarah Johnson"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 15,
                border: '3px solid #16a34a'
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <h4 style={{ color: '#16a34a', marginBottom: 8, fontSize: '1.2rem' }}>Sarah Johnson</h4>
            <p style={{ color: '#15803d', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: 8 }}>
              Plant Care Specialist
            </p>
            <p style={{ color: '#15803d', fontSize: '0.85rem', lineHeight: 1.4 }}>
              10+ years helping urban dwellers create thriving indoor gardens with personalized care advice.
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
              borderRadius: 20,
              padding: 25,
              border: '1px solid rgba(22, 163, 74, 0.2)',
              textAlign: 'center'
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="Michael Chen"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 15,
                border: '3px solid #16a34a'
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <h4 style={{ color: '#16a34a', marginBottom: 8, fontSize: '1.2rem' }}>Michael Chen</h4>
            <p style={{ color: '#15803d', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: 8 }}>
              Air Quality Expert
            </p>
            <p style={{ color: '#15803d', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Specialist in air-purifying plants and their health benefits. Helps clients improve indoor air quality naturally.
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
              borderRadius: 20,
              padding: 25,
              border: '1px solid rgba(22, 163, 74, 0.2)',
              textAlign: 'center'
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
              alt="Emma Rodriguez"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 15,
                border: '3px solid #16a34a'
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <h4 style={{ color: '#16a34a', marginBottom: 8, fontSize: '1.2rem' }}>Emma Rodriguez</h4>
            <p style={{ color: '#15803d', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: 8 }}>
              Interior Plant Designer
            </p>
            <p style={{ color: '#15803d', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Expert in creating stunning plant arrangements that complement any interior design style and space.
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
              borderRadius: 20,
              padding: 25,
              border: '1px solid rgba(22, 163, 74, 0.2)',
              textAlign: 'center'
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
              alt="David Kim"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 15,
                border: '3px solid #16a34a'
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <h4 style={{ color: '#16a34a', marginBottom: 8, fontSize: '1.2rem' }}>David Kim</h4>
            <p style={{ color: '#15803d', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: 8 }}>
              Rare Plant Collector
            </p>
            <p style={{ color: '#15803d', fontSize: '0.85rem', lineHeight: 1.4 }}>
              Specializes in rare and exotic houseplants. Provides expert guidance on collecting and caring for unique specimens.
            </p>
          </motion.div>
      {/* Plant of the Week Section */}
      <motion.section
        className="container"
        style={{
          marginTop: 60,
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(22, 163, 74, 0.1))',
          borderRadius: 20,
          padding: 40,
          border: '1px solid rgba(22, 163, 74, 0.2)'
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.h3
          style={{
            fontSize: '2rem',
            color: '#16a34a',
            textShadow: '0 0 15px rgba(22, 163, 74, 0.6)',
            marginBottom: 30
          }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🌟 Plant of the Week
        </motion.h3>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 30,
            marginTop: 30
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 15,
              padding: 25,
              boxShadow: '0 8px 25px rgba(22, 163, 74, 0.2)',
              border: '1px solid rgba(22, 163, 74, 0.1)'
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300&h=300&fit=crop&crop=center"
              alt="Plant of the Week"
              style={{
                width: 150,
                height: 150,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 15,
                border: '3px solid #16a34a'
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <h4 style={{ color: '#16a34a', marginBottom: 8, fontSize: '1.2rem' }}>Snake Plant</h4>
            <p style={{ color: '#15803d', fontSize: '0.9rem', lineHeight: 1.4 }}>
              Our featured plant this week! Extremely low-maintenance and perfect for purifying indoor air. Great for beginners and adds a modern touch to any space.
            </p>
            <motion.button
              className="button"
              style={{
                background: 'linear-gradient(135deg, #4ade80, #16a34a)',
                fontSize: '1rem',
                padding: '12px 25px',
                marginTop: 15
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🛒 Order Now
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
});
