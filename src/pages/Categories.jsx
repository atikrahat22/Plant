import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import GameCard from '../components/GameCard';

export default function Categories(){
  const { category } = useParams();
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    fetch('/games.json')
      .then(r=>r.json())
      .then(setGames)
      .catch(()=>setGames([]));
    document.title = `GameHub | ${category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Categories'}`;
  }, [category]);

  const categories = ['all', ...new Set(games.map(g => g.category))];
  const currentCategory = category || 'all';
  const filteredGames = currentCategory === 'all'
    ? games
    : games.filter(g => g.category === currentCategory);

  return (
    <div className="container" style={{ marginTop: 20 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          style={{
            marginBottom: 35,
            textAlign: 'center',
            padding: '30px',
            background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(0, 255, 255, 0.1))',
            borderRadius: 25,
            border: '2px solid rgba(255, 0, 110, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            style={{
              fontSize: '3rem',
              background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'rainbow 4s ease-in-out infinite',
              marginBottom: 15,
              textShadow: '0 0 30px rgba(255, 0, 110, 0.5)'
            }}
          >
            🎯 {currentCategory === 'all' ? 'All Categories' : `${currentCategory.toUpperCase()} Games`}
          </motion.h1>
          <motion.p
            style={{
              fontSize: '1.2rem',
              color: '#ffbe0b',
              textShadow: '0 0 10px rgba(255, 190, 11, 0.4)',
              marginBottom: 25
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredGames.length} {filteredGames.length === 1 ? 'game' : 'games'} found
            {currentCategory !== 'all' ? ` in ${currentCategory}` : ' across all categories'}
          </motion.p>

          <motion.div
            style={{
              display: 'flex',
              gap: 15,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: 10
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((cat, index) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={cat === 'all' ? '/categories' : `/categories/${cat}`}
                  className={`button ${currentCategory === cat ? '' : 'secondary'}`}
                  style={{
                    background: currentCategory === cat
                      ? 'linear-gradient(135deg, #ff006e, #8338ec)'
                      : 'rgba(255,255,255,0.15)',
                    color: currentCategory === cat ? 'white' : '#00ffff',
                    border: currentCategory === cat
                      ? 'none'
                      : '2px solid rgba(0, 255, 255, 0.4)',
                    fontSize: '0.9rem',
                    padding: '10px 18px',
                    borderRadius: 12,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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
          <motion.div
            style={{
              textAlign: 'center',
              marginTop: 50,
              padding: 40,
              background: 'linear-gradient(135deg, rgba(255, 68, 68, 0.1), rgba(255, 0, 110, 0.1))',
              borderRadius: 20,
              border: '2px solid rgba(255, 68, 68, 0.3)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              style={{
                fontSize: '1.3rem',
                color: '#ff4444',
                textShadow: '0 0 10px rgba(255, 68, 68, 0.5)',
                marginBottom: 20
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              😔 No games found in this category
            </motion.p>
            <Link
              to="/categories"
              className="button"
              style={{
                background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                fontSize: '1rem',
                padding: '12px 25px'
              }}
            >
              🔄 Browse All Categories
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
