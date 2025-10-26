import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import PlantCard from '../components/PlantCard';

export default function Plants() {
  const [plants, setPlants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/plants.json')
      .then(r => r.json())
      .then(data => {
        setPlants(data);
        const uniqueCategories = [...new Set(data.map(plant => plant.category))];
        setCategories(['All', ...uniqueCategories]);
      })
      .catch(() => setPlants([]));
    document.title = 'GreenNest | Premium Plant Collection';
  }, []);

  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch = plant.plantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <section className="plants-page-header">
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          animation: 'pulse 4s ease-in-out infinite'
        }}></div>

        <motion.h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            margin: '0 0 20px',
            textShadow: '0 0 30px rgba(255,255,255,0.5)'
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          🌿 Premium Plant Collection
        </motion.h1>

        <motion.p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            margin: '0 0 40px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover our curated selection of premium indoor plants. Each plant is carefully selected for quality, health, and beauty.
        </motion.p>

        <div className="plants-search-bar">
          <div className="search-input-container">
            <input
              className="search-input"
              type="text"
              placeholder="🔍 Search plants by name, type, or care level..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={(e) => {
                e.target.parentElement.style.background = 'rgba(255,255,255,0.25)';
                e.target.parentElement.style.borderColor = 'rgba(255,255,255,0.4)';
              }}
              onBlur={(e) => {
                e.target.parentElement.style.background = 'rgba(255,255,255,0.15)';
                e.target.parentElement.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            />
            <motion.button
              className="search-button"
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (searchTerm.trim()) {
                  toast.info(`🌿 Searching for "${searchTerm}"...`);
                }
              }}
            >
              Search
            </motion.button>
          </div>
        </div>
      </section>

      <section className="plants-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🌟 Our Premium Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filteredPlants.length} premium plants found • {searchTerm && `Filtered by "${searchTerm}"`}
        </motion.p>

        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>
                {category === 'All' ? '🌿 All Plants' :
                 category === 'Air Purifier' ? '🌬️ Air Purifier' :
                 category === 'Flowering' ? '🌸 Flowering' :
                 category === 'Hanging' ? '🪴 Hanging' :
                 category === 'Decorative' ? '🏡 Decorative' :
                 category === 'Succulent' ? '🌵 Succulent' :
                 category === 'Tropical' ? '🌺 Tropical' : category}
              </span>
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                    borderRadius: '25px',
                    zIndex: 1
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="premium-stats-bar"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stats-item">
            <div className="stats-number">
              {filteredPlants.length}
            </div>
            <div className="stats-label">Premium Plants</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">
              {categories.length - 1}
            </div>
            <div className="stats-label">Categories</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">
              ⭐ 4.8
            </div>
            <div className="stats-label">Avg Rating</div>
          </div>
          <div className="stats-item">
            <div className="stats-number">
              🚚
            </div>
            <div className="stats-label">Free Delivery</div>
          </div>
        </motion.div>

        {/* Enhanced Plants Grid */}
        <div className="plants-grid">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant, index) => (
              <motion.div
                key={plant.plantId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.25)'
                }}
                whileTap={{ scale: 0.97 }}
              >
                <PlantCard plant={plant} />
              </motion.div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3 className="no-results-title">
                No plants found
              </h3>
              <p className="no-results-text">
                Try adjusting your search or category filter
              </p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                style={{
                  padding: '15px 30px',
                  background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🌿 Clear Filters
              </motion.button>
            </div>
          )}
        </div>

        <motion.div
          className="premium-features"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 'bold' }}>
            🌟 Why Choose GreenNest Premium?
          </h3>
          <div className="features-grid">
            {[
              { icon: '🏆', title: 'Premium Quality', desc: 'Hand-selected plants from certified growers' },
              { icon: '🔬', title: 'Expert Care', desc: 'Detailed care guides and personalized advice' },
              { icon: '🚚', title: 'Free Delivery', desc: 'Fast, secure delivery to your doorstep' },
              { icon: '💯', title: 'Satisfaction Guarantee', desc: '100% satisfaction or money back promise' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)' }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4 className="feature-title">
                  {feature.title}
                </h4>
                <p className="feature-desc">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
