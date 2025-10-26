import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import PlantCard from '../components/PlantCard';

export default React.memo(function HomeComponent() {
  const [plants, setPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/plants.json')
      .then(r => r.json())
      .then(data => {
        setPlants(data);
        const uniqueCategories = [...new Set(data.map(plant => plant.category))];
        setCategories(['All', ...uniqueCategories]);
      })
      .catch(() => setPlants([]));
    document.title = 'GreenNest | Home';
    toast.success('🌟 Welcome to GreenNest! Explore our amazing plant collection.', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.scrollTo(0, 0);
  }, []);

  const filteredPlants = selectedCategory === 'All'
    ? [...plants].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    : [...plants].filter(plant => plant.category === selectedCategory).sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

  return (
    <main>
      <section className="basic-banner" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: 'clamp(40px, 5vw, 60px) clamp(10px, 2vw, 20px)',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        minHeight: 'clamp(400px, 50vh, 600px)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <video
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.3
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="banner-content" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
              color: 'darkgreen',
              padding: '8px 20px',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              boxShadow: '0 8px 25px rgba(255,215,0,0.4)'
            }}
          >
            🌟 Premium Plant Collection
          </motion.div>

          <motion.h1
            className="banner-title"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 'bold',
              margin: '0 0 20px',
              background: 'linear-gradient(45deg, #ffffff, #f0f9ff, #e0e7ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(255,255,255,0.5)',
              textAlign: 'center'
            }}
            animate={{
              y: [-10, 10, -10],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Welcome to GreenNest
          </motion.h1>
          <motion.p
            className="banner-subtitle"
            style={{
              fontSize: 'clamp(1rem, 3vw, 2rem)',
              margin: '0 0 20px',
              color: 'rgba(255,255,255,0.95)',
              textShadow: '0 0 15px rgba(255,255,255,0.3)',
              textAlign: 'center',
              fontWeight: '600'
            }}
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            Your Ultimate Premium Plant Shop
          </motion.p>
          <motion.p
            className="banner-description"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            Discover our curated collection of premium indoor plants, expert care guides, and personalized consultation services. Transform your space with nature's finest.
          </motion.p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            <motion.button
              className="banner-button"
              style={{
                padding: 'clamp(12px, 2vw, 18px) clamp(25px, 4vw, 35px)',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(34,197,94,0.4)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                toast.success('🌿 Redirecting to our premium plant collection!');
                window.location.href = '/plants';
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 15px 40px rgba(34,197,94,0.6)',
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              🌿 Shop Premium Plants
            </motion.button>

            <motion.button
              className="banner-button"
              style={{
                padding: 'clamp(12px, 2vw, 18px) clamp(25px, 4vw, 35px)',
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '30px',
                cursor: 'pointer',
                fontWeight: 'bold',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                toast.info('🔐 Redirecting to premium login!');
                window.location.href = '/login';
              }}
              whileHover={{
                scale: 1.1,
                background: 'rgba(255,255,255,0.1)',
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ Join Premium Club
            </motion.button>

            <motion.button
              className="premium-club-button"
              style={{
                padding: 'clamp(10px, 2vw, 15px) clamp(20px, 4vw, 30px)',
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                background: 'linear-gradient(45deg, #FFD700, #FF8C00)',
                color: 'darkgreen',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(255,215,0,0.4)',
                marginLeft: '20px'
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 15px 40px rgba(255,215,0,0.6)',
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                toast.success('🌟 Welcome to Premium Club! Get exclusive benefits.');
              }}
            >
              ⭐ VIP Experience
            </motion.button>
          </div>

          <motion.div
            className="trust-indicators"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="trust-item">
              <div className="trust-icon">🌿</div>
              <div className="trust-label">Premium Quality</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🚚</div>
              <div className="trust-label">Free Delivery</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">💯</div>
              <div className="trust-label">Satisfaction Guaranteed</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">👨‍🌾</div>
              <div className="trust-label">Expert Support</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(15px)',
            padding: '15px',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.3)'
          }}
          whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.3)' }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            toast.success('🛒 Opening premium cart experience!');
          }}
        >
          🛒 Premium Cart
        </motion.div>
      </section>

      <motion.section
        className="categories-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Shop by Category
        </motion.h2>

        <motion.div
          className="categories-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                backdropFilter: 'blur(15px)',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                width: '150px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
              onClick={() => {
                setSelectedCategory(category);
                toast.info(`🌿 Filtering by ${category} plants!`);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
                style={{ fontSize: '2rem', marginBottom: '10px' }}
              >
                {category === 'Air Purifier' ? '🌿' :
                 category === 'Flowering' ? '🌸' :
                 category === 'Hanging' ? '🪴' :
                 category === 'Decorative' ? '🏡' :
                 category === 'Succulent' ? '🌵' :
                 category === 'Tropical' ? '🌺' : '🌱'}
              </motion.div>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#22c55e' }}>{category}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <section className="plants-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🌿 Top Rated Indoor Plants
        </motion.h2>

        <div className="plants-grid">
          {filteredPlants.map((plant, index) => (
            <motion.div
              key={plant.plantId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <PlantCard plant={plant} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <h3 className="section-subtitle">
          🌿 Stay Updated with Plant Care
        </h3>
        <p className="newsletter-description">
          Get weekly plant care tips, seasonal guides, and exclusive offers on new plant arrivals!
        </p>
        <form
          className="newsletter-form"
          onSubmit={(e) => { e.preventDefault(); toast.success('🌱 Successfully subscribed to plant care tips!'); }}
        >
          <input
            className="newsletter-input"
            placeholder="Enter your email address"
            type="email"
            required
          />
          <button
            className="newsletter-button"
            type="submit"
          >
            🌱 Subscribe Now
          </button>
        </form>
      </section>

      <section className="care-tips-section">
        <h3 className="care-tips-title">
          🌟 Essential Plant Care Tips
        </h3>

        <div className="care-tips-grid">
          <div className="care-tip-card">
            <div className="care-tip-icon">💧</div>
            <h4 className="care-tip-title">Premium Watering Guide</h4>
            <p className="care-tip-text">
              Check soil moisture 2 inches deep. Water when dry, but avoid overwatering. Most plants prefer being slightly dry rather than constantly wet.
            </p>
          </div>

          <div className="care-tip-card">
            <div className="care-tip-icon">☀️</div>
            <h4 className="care-tip-title">Perfect Light Conditions</h4>
            <p className="care-tip-text">
              Bright indirect light is ideal for most houseplants. South-facing windows provide strong light, while north-facing offer gentle illumination.
            </p>
          </div>

          <div className="care-tip-card">
            <div className="care-tip-icon">🌱</div>
            <h4 className="care-tip-title">Professional Fertilizing</h4>
            <p className="care-tip-text">
              Feed plants during growing season (spring/summer) with balanced fertilizer. Reduce feeding in fall/winter when growth slows down.
            </p>
          </div>
        </div>

        <div className="care-tips-cta">
          <button className="care-tips-button">
            🌟 Get Expert Care Guide
          </button>
        </div>
      </section>

      <section className="experts-section">
        <h3 className="experts-title">
          🌟 Meet Our Premium Green Experts
        </h3>

        <div className="experts-grid">
          <div className="expert-card">
            <div className="expert-image-container">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face&auto=format&q=80"
                alt="Sarah Johnson"
                className="expert-image"
              />
              <div className="expert-image-glow"></div>
            </div>

            <h4 className="expert-name">Sarah Johnson</h4>
            <p className="expert-title">✨ Plant Care Specialist</p>
            <p className="expert-description">
              10+ years helping urban dwellers create thriving indoor gardens with personalized care advice and premium plant selections.
            </p>
          </div>

          <div className="expert-card">
            <div className="expert-image-container">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&auto=format&q=80"
                alt="Michael Chen"
                className="expert-image"
              />
              <div className="expert-image-glow"></div>
            </div>

            <h4 className="expert-name">Michael Chen</h4>
            <p className="expert-title">🌬️ Air Quality Expert</p>
            <p className="expert-description">
              Specialist in air-purifying plants and their health benefits. Helps clients improve indoor air quality naturally with expert recommendations.
            </p>
          </div>

          <div className="expert-card">
            <div className="expert-image-container">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face&auto=format&q=80"
                alt="Emma Rodriguez"
                className="expert-image"
              />
              <div className="expert-image-glow"></div>
            </div>

            <h4 className="expert-name">Emma Rodriguez</h4>
            <p className="expert-title">🎨 Interior Plant Designer</p>
            <p className="expert-description">
              Expert in creating stunning plant arrangements that complement any interior design style and space with professional aesthetics.
            </p>
          </div>

          <div className="expert-card">
            <div className="expert-image-container">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face&auto=format&q=80"
                alt="David Kim"
                className="expert-image"
              />
              <div className="expert-image-glow"></div>
            </div>

            <h4 className="expert-name">David Kim</h4>
            <p className="expert-title">🌿 Rare Plant Collector</p>
            <p className="expert-description">
              Specializes in rare and exotic houseplants. Provides expert guidance on collecting and caring for unique premium specimens.
            </p>
          </div>
        </div>

        <div className="experts-cta">
          <button className="experts-button">
            🌟 Book Expert Consultation
          </button>
        </div>
      </section>

      <section className="testimonials-section">
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🌟 What Our Customers Say
        </motion.h2>

        <motion.p
          className="testimonials-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don't just take our word for it - hear from our satisfied customers
        </motion.p>

        <div className="testimonials-container">
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
                  alt="Sarah Johnson"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Sarah Johnson</h4>
                  <p className="testimonial-role">Plant Enthusiast</p>
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="star-icon">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-text">
                  "GreenNest transformed my home! The premium plants arrived in perfect condition and the care guides are incredibly helpful. The quality is outstanding!"
                </p>
                <div className="testimonial-plant">
                  <span className="plant-tag">🌿 Snake Plant Collection</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
                  alt="Michael Chen"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Michael Chen</h4>
                  <p className="testimonial-role">Interior Designer</p>
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="star-icon">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-text">
                  "As a professional designer, I only work with the best. GreenNest delivers exceptional quality plants that enhance any space beautifully."
                </p>
                <div className="testimonial-plant">
                  <span className="plant-tag">🌿 Custom Arrangements</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
                  alt="Emma Rodriguez"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Emma Rodriguez</h4>
                  <p className="testimonial-role">Office Manager</p>
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="star-icon">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Our office air quality improved dramatically after adding GreenNest plants. The team loves the natural atmosphere and the service was impeccable."
                </p>
                <div className="testimonial-plant">
                  <span className="plant-tag">🌿 Air Purifying Plants</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
                  alt="David Kim"
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">David Kim</h4>
                  <p className="testimonial-role">Plant Collector</p>
                  <div className="testimonial-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className="star-icon">⭐</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="testimonial-content">
                <p className="testimonial-text">
                  "The rare plant selection at GreenNest is unmatched. I found specimens I've been searching for years. The expert consultation was invaluable."
                </p>
                <div className="testimonial-plant">
                  <span className="plant-tag">🌿 Rare Plant Collection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Stats */}
          <motion.div
            className="customer-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Plants Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Expert Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="featured-plant-section">
        <h3 className="featured-plant-title">
          🌟 Premium Plant of the Week
        </h3>

        <div className="featured-plant-grid">
          <div className="featured-plant-card">
            <div className="featured-card-glow"></div>
            <div className="featured-badge">
              ⭐ Featured
            </div>

            <div className="featured-plant-image-container">
              <img
                src="https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=200&h=200&fit=crop&crop=center&auto=format&q=80"
                alt="Plant of the Week"
                className="featured-plant-image"
              />
              <div className="featured-plant-image-glow"></div>
            </div>

            <h4 className="featured-plant-name">Snake Plant</h4>
            <p className="featured-plant-description">
              Our premium featured plant this week! Extremely low-maintenance and perfect for purifying indoor air. Great for beginners and adds a modern touch to any space with its architectural leaves.
            </p>

            <div className="featured-plant-features">
              {['🌿 Air Purifier', '💧 Low Water', '🏆 Beginner Friendly', '✨ Modern Design'].map((feature, i) => (
                <span key={i} className="featured-feature-tag">
                  {feature}
                </span>
              ))}
            </div>

            <button className="featured-order-button">
              🛒 Order Premium Now
            </button>
          </div>

          <div className="weekly-special-card">
            <div className="special-icon">🎁</div>

            <h4 className="special-title">Weekly Premium Special</h4>
            <p className="special-description">
              Get <strong>25% OFF</strong> on all Snake Plants this week! Limited time offer for our premium plant of the week selection.
            </p>

            <button className="special-claim-button">
              💰 Claim 25% Discount
            </button>
          </div>
        </div>

        <div className="featured-newsletter-cta">
          <button className="featured-newsletter-button">
            🌟 Join Premium Club
          </button>
        </div>
      </section>
    </main>
  );
});
