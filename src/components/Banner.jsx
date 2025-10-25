import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function Banner(){
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&h=800&fit=crop&crop=center',
      title: '🌱 Discover Your Green Paradise',
      subtitle: 'Transform your space with beautiful, healthy indoor plants that purify the air and bring nature indoors',
      cta: 'Shop Plants'
    },
    {
      url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&h=800&fit=crop&crop=center',
      title: '💚 Expert Plant Care Made Simple',
      subtitle: 'Get personalized care guides, watering schedules, and expert tips to keep your plants thriving',
      cta: 'Get Care Tips'
    },
    {
      url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1920&h=800&fit=crop&crop=center',
      title: '🏡 Create Your Indoor Oasis',
      subtitle: 'From low-light survivors to sun-loving beauties, find the perfect plants for every corner of your home',
      cta: 'Find Your Match'
    },
    {
      url: 'https://images.unsplash.com/photo-1509423353981-b89aac310f9b?w=1920&h=800&fit=crop&crop=center',
      title: '✨ Professional Consultation Available',
      subtitle: 'Book a session with our plant care experts for personalized advice and plant selection guidance',
      cta: 'Book Consultation'
    },
    {
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&h=800&fit=crop&crop=center',
      title: '🎮 Game Reviews & Recommendations',
      subtitle: 'Discover top-rated games with in-depth reviews, ratings, and download links for all your gaming needs',
      cta: 'Browse Games'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop&crop=center',
      title: '🌟 Community Favorites',
      subtitle: 'Explore the most loved plants and games by our community of enthusiasts and plant parents',
      cta: 'View Favorites'
    },
    {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=800&fit=crop&crop=center',
      title: '📚 Learn & Grow',
      subtitle: 'Access comprehensive care guides, tutorials, and tips to become a plant and gaming expert',
      cta: 'Start Learning'
    },
    {
      url: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1920&h=800&fit=crop&crop=center',
      title: '🚀 New Arrivals',
      subtitle: 'Check out the latest plant varieties and trending games added to our collection this week',
      cta: 'Explore New'
    }
  ];

  return (
    <div className="banner-full-width">
      <div className="banner-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.banner-arrow-right',
            prevEl: '.banner-arrow-left',
          }}
          pagination={{
            el: '.banner-dots',
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" style="background: ${index === this.realIndex ? '#4ade80' : 'rgba(255,255,255,0.5)'}"></span>`;
            },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          loop={true}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="banner-slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={slide.url}
                  alt={slide.title}
                  className="banner-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/1920x800?text=Image+Not+Available';
                  }}
                />
                <div className="banner-overlay">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="hero-content"
                  >
                    <h1 className="banner-title-full">
                      {slide.title}
                    </h1>
                    <p className="banner-subtitle-full">
                      {slide.subtitle}
                    </p>
                    <motion.button
                      className="hero-cta-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
                        backgroundSize: '300% 300%',
                        animation: 'gradientShift 3s ease-in-out infinite',
                        border: 'none',
                        padding: '15px 40px',
                        borderRadius: '30px',
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 10px 40px rgba(255, 107, 107, 0.4)',
                        marginTop: '25px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-5px) scale(1.05)';
                        e.target.style.boxShadow = '0 15px 50px rgba(255, 107, 107, 0.6)';
                        e.target.style.backgroundPosition = '100% 0';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = '0 10px 40px rgba(255, 107, 107, 0.4)';
                        e.target.style.backgroundPosition = '0% 50%';
                      }}
                    >
                      {slide.cta}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="banner-arrow banner-arrow-left">‹</button>
        <button className="banner-arrow banner-arrow-right">›</button>

        {/* Pagination Dots */}
        <div className="banner-dots"></div>
      </div>
    </div>
  );
}
