import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PremiumBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const bannerSlides = useMemo(() => [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=1920&h=1080&fit=crop&crop=center&auto=format&q=90',
      title: '🌿 Premium Snake Plant Collection',
      subtitle: 'Transform Your Space with Nature\'s Finest',
      description: 'Discover our curated selection of premium indoor plants, carefully chosen for their beauty, air-purifying qualities, and ease of care.',
      features: ['✨ NASA-Approved Air Purifiers', '💧 Low Maintenance', '🌟 Beginner Friendly', '🏆 Award-Winning Varieties'],
      cta: 'Shop Premium Collection',
      secondaryCta: 'Get Care Guide',
      accentColor: '#22c55e',
      discount: '25% OFF',
      badge: 'BESTSELLER'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=1080&fit=crop&crop=center&auto=format&q=90',
      title: '🏡 Peace Lily Paradise',
      subtitle: 'Elegant Blooms That Clean Your Air',
      description: 'Experience the beauty of Peace Lilies - elegant white flowers that naturally purify your indoor air while adding sophistication to any room.',
      features: ['🌸 Beautiful Year-Round Blooms', '💨 Top Air Purifier', '🏆 NASA Certified', '🌿 Pet Friendly'],
      cta: 'Order Peace Lilies',
      secondaryCta: 'View All Flowers',
      accentColor: '#3b82f6',
      discount: '30% OFF',
      badge: 'LIMITED TIME'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1920&h=1080&fit=crop&crop=center&auto=format&q=90',
      title: '🌿 Spider Plant Collection',
      subtitle: 'Easy-Care Plants for Busy Lifestyles',
      description: 'Perfect for beginners and busy professionals. Spider plants thrive with minimal care and naturally clean your air 24/7.',
      features: ['🕷️ Easy Propagation', '🌱 Fast Growing', '💚 Pet Safe', '💧 Drought Tolerant'],
      cta: 'Start Your Collection',
      secondaryCta: 'Learn More',
      accentColor: '#f59e0b',
      discount: '20% OFF',
      badge: 'EASY CARE'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center&auto=format&q=90',
      title: '🎨 Designer Plant Arrangements',
      subtitle: 'Professional Interior Plant Design',
      description: 'Let our expert designers create stunning plant arrangements that complement your interior design perfectly.',
      features: ['🎨 Custom Arrangements', '🏠 Interior Design', '👨‍🎨 Expert Consultation', '✨ Expert Service'],
      cta: 'Book Consultation',
      secondaryCta: 'View Portfolio',
      accentColor: '#8b5cf6',
      discount: '15% OFF',
      badge: 'EXPERT SERVICE'
    }
  ], []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  if (!isLoaded) {
    return (
      <div className="premium-banner-loading">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h3>Loading Premium Collection...</h3>
          <p>Preparing the finest selection for you</p>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-banner-section">
      <div className="premium-banner-container">
        <div className="premium-banner-wrapper">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.premium-arrow-right',
              prevEl: '.premium-arrow-left',
            }}
            pagination={{
              el: '.premium-dots',
              clickable: true,
              renderBullet: (index, className) => {
                const isActive = index === activeIndex;
                return `<span class="${className} ${isActive ? 'premium-dot-active' : 'premium-dot'}"></span>`;
              },
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            speed={1200}
            loop={true}
            onSlideChange={handleSlideChange}
            className="premium-swiper"
          >
            <AnimatePresence mode="wait" custom={activeIndex}>
              {bannerSlides.map((slide, index) => (
                <SwiperSlide key={slide.id} className="premium-slide">
                  <motion.div
                    className="premium-slide-content"
                    custom={index - activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {/* Premium Background Layers */}
                    <div
                      className="premium-bg-layer-2"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                    <div className="premium-overlay"></div>

                    {/* Premium Floating Elements */}
                    <div className="premium-floating-decorations">
                      <motion.div
                        className="floating-leaf-1"
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        🍃
                      </motion.div>
                      <motion.div
                        className="floating-leaf-2"
                        animate={{
                          y: [10, -10, 10],
                          rotate: [0, -5, 0],
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        🌿
                      </motion.div>
                    </div>

                    {/* Premium Content Container */}
                    <div className="premium-content-container">
                      <motion.div
                        className="premium-content-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                      >
                        {/* Premium Discount Badge */}
                        <motion.div
                          className="premium-discount-badge"
                          initial={{ opacity: 0, scale: 0.8, y: -20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          <span className="discount-text">{slide.discount}</span>
                          <span className="discount-subtitle">FIRST ORDER</span>
                        </motion.div>

                        {/* Premium Collection Badge */}
                        <motion.div
                          className="premium-collection-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7, duration: 0.5 }}
                        >
                          <span className="badge-icon">🏆</span>
                          <span className="badge-text">{slide.badge}</span>
                        </motion.div>

                        {/* Premium Title */}
                        <motion.h1
                          className="premium-title"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Premium Subtitle */}
                        <motion.h2
                          className="premium-subtitle"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                        >
                          {slide.subtitle}
                        </motion.h2>

                        {/* Premium Description */}
                        <motion.p
                          className="premium-description"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                        >
                          {slide.description}
                        </motion.p>

                        {/* Premium Features */}
                        <motion.div
                          className="premium-features-grid"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0, duration: 0.6 }}
                        >
                          {slide.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              className="premium-feature-item"
                              initial={{ opacity: 0, x: -20, scale: 0.9 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{ delay: 1.2 + (i * 0.1), duration: 0.5 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <span className="feature-emoji">{feature.split(' ')[0]}</span>
                              <span className="feature-text">{feature.substring(feature.indexOf(' ') + 1)}</span>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Premium CTA Buttons */}
                        <motion.div
                          className="premium-cta-section"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.4, duration: 0.6 }}
                        >
                          <motion.button
                            className="premium-cta-primary"
                            onClick={() => window.location.href = '/plants'}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="cta-text">{slide.cta}</span>
                            <motion.svg
                              className="cta-arrow"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </motion.svg>
                          </motion.button>

                          <motion.button
                            className="premium-cta-secondary"
                            onClick={() => {
                              const element = document.getElementById('plant-care-tips');
                              element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="cta-text">{slide.secondaryCta}</span>
                            <motion.svg
                              className="cta-icon"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </motion.svg>
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </AnimatePresence>
          </Swiper>

          {/* Premium Navigation Arrows */}
          <motion.button
            className="premium-arrow premium-arrow-left"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </motion.button>

          <motion.button
            className="premium-arrow premium-arrow-right"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </motion.button>

          {/* Premium Pagination Dots */}
          <div className="premium-dots"></div>

          {/* Slide Counter */}
          <div className="slide-counter">
            <span className="current-slide">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="slide-separator">/</span>
            <span className="total-slides">{String(bannerSlides.length).padStart(2, '0')}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .premium-banner-section {
          width: 100%;
          padding: 2rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 5%, #f8fafc 100%);
          position: relative;
          overflow: hidden;
        }

        .premium-banner-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%);
          z-index: 1;
        }

        .premium-banner-loading {
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 32px;
          margin: 2rem auto;
          max-width: 1400px;
          position: relative;
          overflow: hidden;
        }

        .loading-content {
          text-align: center;
          color: #16a34a;
        }

        .loading-content h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .loading-content p {
          font-size: 1.1rem;
          color: #64748b;
          font-weight: 500;
        }

        .loading-spinner {
          width: 80px;
          height: 80px;
          border: 6px solid rgba(34, 197, 94, 0.1);
          border-top: 6px solid #22c55e;
          border-radius: 50%;
          animation: premiumSpin 1.2s linear infinite;
          margin: 0 auto 2rem;
        }

        @keyframes premiumSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .premium-banner-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .premium-banner-wrapper {
          position: relative;
          width: 100%;
          height: 85vh;
          min-height: 650px;
          border-radius: 40px;
          overflow: hidden;
          box-shadow:
            0 40px 120px rgba(0, 0, 0, 0.15),
            0 0 200px rgba(34, 197, 94, 0.08),
            inset 0 0 200px rgba(0, 0, 0, 0.1);
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border: 3px solid rgba(255, 255, 255, 0.1);
        }

        .premium-swiper {
          width: 100%;
          height: 100%;
        }

        .premium-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .premium-slide-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .premium-bg-layer-1 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
          z-index: 1;
        }

        .premium-bg-layer-2 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 2;
          opacity: 0.8;
        }

        .premium-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.02) 30%,
            rgba(0, 0, 0, 0.02) 70%,
            rgba(0, 0, 0, 0.1) 100%
          );
          z-index: 3;
        }

        .premium-floating-decorations {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 4;
        }

        .floating-leaf-1,
        .floating-leaf-2 {
          position: absolute;
          font-size: 3rem;
          opacity: 0.3;
          color: rgba(255, 255, 255, 0.6);
        }

        .floating-leaf-1 {
          top: 20%;
          left: 10%;
        }

        .floating-leaf-2 {
          bottom: 25%;
          right: 15%;
        }

        .premium-content-container {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 3rem;
        }

        .premium-content-wrapper {
          text-align: center;
          max-width: 1000px;
          color: white;
          position: relative;
        }

        .premium-discount-badge {
          position: absolute;
          top: -20px;
          right: -20px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 900;
          font-size: 1.1rem;
          box-shadow: 0 15px 40px rgba(239, 68, 68, 0.4);
          border: 3px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(15px);
          z-index: 10;
          animation: discountPulse 2s ease-in-out infinite;
        }

        .discount-text {
          display: block;
          font-size: 1.4rem;
          line-height: 1;
        }

        .discount-subtitle {
          display: block;
          font-size: 0.7rem;
          opacity: 0.9;
          letter-spacing: 1px;
        }

        @keyframes discountPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 15px 40px rgba(239, 68, 68, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 20px 50px rgba(239, 68, 68, 0.6); }
        }

        .premium-collection-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
          backdrop-filter: blur(20px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 2rem;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .badge-icon {
          font-size: 1.5rem;
        }

        .badge-text {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .premium-title {
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 30%, #ffffff 70%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 60px rgba(255, 255, 255, 0.3);
          letter-spacing: -0.02em;
        }

        .premium-subtitle {
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .premium-description {
          font-size: clamp(1.1rem, 2.5vw, 1.6rem);
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 3rem;
          opacity: 0.9;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .premium-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
          justify-items: center;
        }

        .premium-feature-item {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          padding: 1.2rem 2rem;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease;
        }

        .feature-emoji {
          font-size: 1.5rem;
        }

        .feature-text {
          color: rgba(255, 255, 255, 0.95);
        }

        .premium-cta-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          justify-content: center;
        }

        .premium-cta-primary,
        .premium-cta-secondary {
          padding: 1.5rem 3.5rem;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 800;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          min-width: 280px;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .premium-cta-primary {
          background: linear-gradient(135deg, #22c55e, #16a34a, #15803d);
          color: white;
          box-shadow:
            0 15px 40px rgba(34, 197, 94, 0.4),
            0 0 30px rgba(34, 197, 94, 0.3);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .premium-cta-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.8s ease;
        }

        .premium-cta-primary:hover::before {
          left: 100%;
        }

        .premium-cta-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow:
            0 20px 50px rgba(34, 197, 94, 0.6),
            0 5px 20px rgba(34, 197, 94, 0.4);
        }

        .premium-cta-primary:active {
          transform: translateY(2px) scale(0.98);
        }

        .premium-cta-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 3px solid rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(15px);
          box-shadow:
            0 15px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .premium-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.6);
          transform: translateY(-4px) scale(1.02);
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.3),
            0 5px 20px rgba(0, 0, 0, 0.2);
        }

        .premium-cta-secondary:active {
          transform: translateY(2px) scale(0.98);
        }

        .cta-text {
          font-weight: 800;
        }

        .cta-arrow,
        .cta-icon {
          width: 24px;
          height: 24px;
          transition: all 0.3s ease;
        }

        .premium-cta-primary:hover .cta-arrow {
          transform: translateX(6px);
        }

        .premium-cta-secondary:hover .cta-icon {
          transform: scale(1.2) rotate(10deg);
        }

        .premium-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(15px);
          border: 3px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .premium-arrow:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: translateY(-50%) scale(1.1);
          box-shadow:
            0 15px 50px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .premium-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }

        .premium-arrow svg {
          width: 28px;
          height: 28px;
          stroke-width: 3px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }

        .premium-arrow-left {
          left: 2rem;
        }

        .premium-arrow-right {
          right: 2rem;
        }

        .slide-counter {
          position: absolute;
          bottom: 3rem;
          right: 3rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          padding: 1rem 2rem;
          border-radius: 50px;
          color: white;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .current-slide {
          color: #22c55e;
          font-size: 1.3rem;
        }

        .slide-separator {
          opacity: 0.6;
        }

        .total-slides {
          opacity: 0.8;
        }

        .premium-dots {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1.2rem;
          z-index: 10;
          padding: 1rem 2rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(15px);
          border-radius: 50px;
          border: 2px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .premium-dot,
        .premium-dot-active {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .premium-dot {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(0.9);
        }

        .premium-dot:hover {
          transform: scale(1.3);
          background: rgba(255, 255, 255, 0.5);
        }

        .premium-dot-active {
          background: white;
          transform: scale(1.2);
          box-shadow:
            0 0 0 3px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(255, 255, 255, 0.8);
          animation: dotPulse 2s infinite;
        }

        @keyframes dotPulse {
          0%, 100% {
            box-shadow:
              0 0 0 3px rgba(255, 255, 255, 0.3),
              0 0 20px rgba(255, 255, 255, 0.8);
          }
          50% {
            box-shadow:
              0 0 0 4px rgba(255, 255, 255, 0.4),
              0 0 25px rgba(255, 255, 255, 1);
            transform: scale(1.3);
          }
        }

        /* Enhanced Mobile Responsiveness */
        @media (max-width: 1024px) {
          .premium-banner-wrapper {
            height: 75vh;
            min-height: 550px;
            border-radius: 32px;
          }

          .premium-content-container {
            padding: 3rem 2rem;
          }

          .slide-counter {
            bottom: 2rem;
            right: 2rem;
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .premium-banner-section {
            padding: 1rem 0;
          }

          .premium-banner-container {
            padding: 0 1rem;
          }

          .premium-banner-wrapper {
            height: 70vh;
            min-height: 500px;
            border-radius: 24px;
          }

          .premium-content-container {
            padding: 2rem 1.5rem;
          }

          .premium-discount-badge {
            top: -10px;
            right: -10px;
            padding: 12px 24px;
            font-size: 0.9rem;
          }

          .discount-text {
            font-size: 1.1rem;
          }

          .discount-subtitle {
            font-size: 0.6rem;
          }

          .premium-collection-badge {
            padding: 12px 24px;
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }

          .premium-features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 2.5rem;
          }

          .premium-cta-section {
            gap: 1rem;
          }

          .premium-cta-primary,
          .premium-cta-secondary {
            min-width: 250px;
            font-size: 1rem;
            padding: 1.2rem 2.5rem;
          }

          .premium-arrow {
            width: 60px;
            height: 60px;
          }

          .premium-arrow svg {
            width: 24px;
            height: 24px;
          }

          .premium-arrow-left {
            left: 1rem;
          }

          .premium-arrow-right {
            right: 1rem;
          }

          .slide-counter {
            bottom: 1.5rem;
            right: 1.5rem;
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
          }

          .premium-dots {
            bottom: 1.5rem;
            padding: 0.8rem 1.5rem;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .premium-banner-wrapper {
            height: 65vh;
            min-height: 450px;
            border-radius: 20px;
          }

          .premium-content-container {
            padding: 1.5rem 1rem;
          }

          .premium-discount-badge {
            padding: 10px 20px;
            font-size: 0.8rem;
          }

          .discount-text {
            font-size: 1rem;
          }

          .premium-collection-badge {
            padding: 10px 20px;
            font-size: 0.8rem;
          }

          .premium-title {
            font-size: clamp(2rem, 12vw, 3.5rem);
            margin-bottom: 1rem;
          }

          .premium-subtitle {
            font-size: clamp(1.2rem, 6vw, 1.8rem);
            margin-bottom: 0.8rem;
          }

          .premium-description {
            font-size: clamp(0.95rem, 4vw, 1.2rem);
            margin-bottom: 2rem;
          }

          .premium-features-grid {
            margin-bottom: 2rem;
          }

          .premium-feature-item {
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }

          .premium-cta-primary,
          .premium-cta-secondary {
            min-width: 220px;
            font-size: 0.9rem;
            padding: 1rem 2rem;
          }

          .premium-arrow {
            width: 50px;
            height: 50px;
          }

          .slide-counter {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .floating-leaf-1,
          .floating-leaf-2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default React.memo(PremiumBanner);
