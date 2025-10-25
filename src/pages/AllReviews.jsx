import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GameCard from '../components/GameCard';

export default function AllReviews(){
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(()=>{
    fetch('/games.json').then(r=>r.json()).then(setGames).catch(()=>setGames([]));
    document.title = 'GameHub | All Reviews';
  },[]);

  const categories = ['all', ...new Set(games.map(g => g.category))];

  const filteredGames = games
    .filter(g => filter === 'all' || g.category === filter)
    .sort((a, b) => {
      if (sortBy === 'rating') return parseFloat(b.ratings) - parseFloat(a.ratings);
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          style={{
            position: 'relative',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 255, 255, 0.1))',
            borderRadius: 25,
            border: '2px solid rgba(255, 0, 110, 0.3)',
            marginBottom: 40,
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=300&fit=crop&auto=format&q=80"
            alt="Game Reviews Banner"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: 15,
              marginBottom: 20
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.h1
            style={{
              fontSize: '3rem',
              background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'rainbow 4s ease-in-out infinite',
              textAlign: 'center',
              marginBottom: 15,
              textShadow: '0 0 30px rgba(255, 0, 110, 0.5)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            🎮 All Game Reviews
          </motion.h1>
          <motion.p
            className="small"
            style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#ffbe0b',
              textShadow: '0 0 10px rgba(255, 190, 11, 0.4)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Browse our complete collection of {games.length} premium games
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'flex',
            gap: 15,
            marginBottom: 30,
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px',
            background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 255, 255, 0.1))',
            borderRadius: 20,
            border: '1px solid rgba(255, 0, 110, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 }}
          >
            <label
              className="small"
              style={{
                marginRight: 10,
                color: '#00ffff',
                fontWeight: 600,
                textShadow: '0 0 5px rgba(0, 255, 255, 0.3)'
              }}
            >
              🎯 Filter by Category:
            </label>
            <select
              className="input"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              style={{
                width: 'auto',
                display: 'inline-block',
                background: 'rgba(0, 255, 255, 0.1)',
                border: '1px solid rgba(0, 255, 255, 0.3)',
                color: '#00ffff',
                fontWeight: 600
              }}
            >
              {categories.map(cat => (
                <option
                  key={cat}
                  value={cat}
                  style={{
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: '#00ffff'
                  }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <label
              className="small"
              style={{
                marginRight: 10,
                color: '#ff006e',
                fontWeight: 600,
                textShadow: '0 0 5px rgba(255, 0, 110, 0.3)'
              }}
            >
              📊 Sort by:
            </label>
            <select
              className="input"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{
                width: 'auto',
                display: 'inline-block',
                background: 'rgba(255, 0, 110, 0.1)',
                border: '1px solid rgba(255, 0, 110, 0.3)',
                color: '#ff006e',
                fontWeight: 600
              }}
            >
              <option
                value="rating"
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: '#ff006e'
                }}
              >
                ⭐ Rating
              </option>
              <option
                value="name"
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: '#ff006e'
                }}
              >
                🔤 Name
              </option>
            </select>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          {filteredGames.map((g, index) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <GameCard game={g} />
            </motion.div>
          ))}
        </motion.div>

        {filteredGames.length === 0 && (
          <motion.p
            className="small"
            style={{
              textAlign: 'center',
              marginTop: 50,
              fontSize: '1.2rem',
              color: '#ff4444',
              textShadow: '0 0 10px rgba(255, 68, 68, 0.5)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            😔 No games found in this category. Try selecting a different filter!
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
