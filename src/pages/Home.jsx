import React, { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import PlantCard from '../components/PlantCard';
import PremiumBanner from '../components/PremiumBanner';
import TestimonialsSlider from '../components/TestimonialsSlider';

export default React.memo(function HomeComponent() {
  const [plants, setPlants] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/plants.json')
      .then(r => r.json())
      .then(data => {
        setPlants(data);
        // Extract unique categories
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
      {/* Premium Banner Slider */}
      <PremiumBanner />

      <motion.section
        className="categories-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
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
              <p style={{ fontWeight: 'bold', margin: 0, color: 'white' }}>{category}</p>
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

        {/* Category Filter */}
        <div className="category-filter">
        </div>

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

      {/* Plant Care Tips Section */}
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

      {/* Green Experts Section */}
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

      {/* Customer Testimonials Slider */}
      <TestimonialsSlider />

      {/* Plant of the Week Section */}
      <section className="featured-plant-section">
        <h3 className="featured-plant-title">
          🌟 Premium Plant of the Week
        </h3>

        <div className="featured-plant-grid">
          <div className="featured-plant-card">
            {/* Premium Card Glow */}
            <div className="featured-card-glow"></div>

            {/* Premium Badge */}
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

            {/* Premium Features */}
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

          {/* Weekly Special Offer */}
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

        {/* Premium Newsletter CTA */}
        <div className="featured-newsletter-cta">
          <button className="featured-newsletter-button">
            🌟 Join Premium Club
          </button>
        </div>
      </section>

    </main>
  );
});
