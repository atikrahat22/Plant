import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Plant Enthusiast',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      rating: 5,
      text: 'GreenNest transformed my home! The premium plants arrived in perfect condition and the care guides are incredibly helpful. The quality is outstanding!',
      plant: 'Snake Plant Collection'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Interior Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      rating: 5,
      text: 'As a professional designer, I only work with the best. GreenNest delivers exceptional quality plants that enhance any space beautifully.',
      plant: 'Custom Arrangements'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Office Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      rating: 5,
      text: 'Our office air quality improved dramatically after adding GreenNest plants. The team loves the natural atmosphere and the service was impeccable.',
      plant: 'Air Purifying Plants'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Plant Collector',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80',
      rating: 5,
      text: 'The rare plant selection at GreenNest is unmatched. I found specimens I\'ve been searching for years. The expert consultation was invaluable.',
      plant: 'Rare Plant Collection'
    }
  ];

  return (
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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.testimonial-arrow-right',
            prevEl: '.testimonial-arrow-left',
          }}
          pagination={{
            el: '.testimonial-dots',
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="testimonial-header">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar"
                  />
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-rating">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-plant">
                    <span className="plant-tag">🌿 {testimonial.plant}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <motion.button
          className="testimonial-arrow testimonial-arrow-left"
          whileHover={{ scale: 1.1, x: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </motion.button>

        <motion.button
          className="testimonial-arrow testimonial-arrow-right"
          whileHover={{ scale: 1.1, x: 3 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </motion.button>

        {/* Pagination Dots */}
        <div className="testimonial-dots"></div>
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
    </section>
  );
};

export default TestimonialsSlider;
