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
                        background: 'linear-gradient(135deg, #4ade80, #16a34a)',
                        border: 'none',
                        padding: '12px 30px',
                        borderRadius: '25px',
                        color: 'white',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 8px 25px rgba(74, 222, 128, 0.4)',
                        marginTop: '20px'
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
