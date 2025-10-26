import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaPinterest, FaTwitter, FaYoutube, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt, FaStar, FaShieldAlt, FaTruck, FaAward } from 'react-icons/fa';

export default function Footer(){
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: 'white',
        padding: '60px 20px 30px',
        marginTop: '50px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Premium Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(74, 222, 128, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(22, 163, 74, 0.05) 0%, transparent 50%)
        `,
        opacity: 0.7
      }}></div>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                style={{
                  fontSize: '2rem',
                  background: 'linear-gradient(45deg, #4ade80, #16a34a, #15803d)',
                  backgroundSize: '300% 300%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'rainbow 4s ease-in-out infinite',
                  margin: '0 0 20px',
                  fontWeight: 900,
                  letterSpacing: '1px'
                }}
              >
                🌱 GreenNest
              </motion.h3>
            </motion.div>

            <p style={{
              color: '#cbd5e1',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Your premium destination for curated indoor plants, expert care guides, and personalized consultation services. Transform your space with nature's finest selection.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8' }}>
                <FaMapMarkerAlt style={{ color: '#22c55e' }} />
                <span>123 Plant Street, Green City, GC 12345</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8' }}>
                <FaPhone style={{ color: '#22c55e' }} />
                <span>+1 (555) 123-PLANT</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#94a3b8' }}>
                <FaEnvelope style={{ color: '#22c55e' }} />
                <span>hello@greennest.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#22c55e'
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'About Us', icon: '📖', href: '/about' },
                { label: 'Our Plants', icon: '🌿', href: '/plants' },
                { label: 'Plant Care Guide', icon: '📚', href: '/care-guide' },
                { label: 'Expert Consultation', icon: '👨‍🌾', href: '/consultation' },
                { label: 'Plant Delivery', icon: '🚚', href: '/delivery' },
                { label: 'Gift Cards', icon: '🎁', href: '/gift-cards' }
              ].map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    padding: '8px 0',
                    borderBottom: '1px solid transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  whileHover={{
                    color: '#22c55e',
                    borderBottomColor: '#22c55e',
                    x: 5
                  }}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#22c55e'
            }}>
              Customer Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Contact Us', icon: '📞', href: '/contact' },
                { label: 'Help Center', icon: '❓', href: '/help' },
                { label: 'Track Order', icon: '📦', href: '/track' },
                { label: 'Returns & Exchanges', icon: '↩️', href: '/returns' },
                { label: 'Plant Care Support', icon: '🌱', href: '/care-support' },
                { label: 'Business Hours', icon: '🕒', href: '/hours' }
              ].map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    padding: '8px 0',
                    borderBottom: '1px solid transparent',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  whileHover={{
                    color: '#22c55e',
                    borderBottomColor: '#22c55e',
                    x: 5
                  }}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#22c55e'
            }}>
              Stay Connected
            </h4>
            <p style={{
              color: '#cbd5e1',
              fontSize: '0.9rem',
              marginBottom: '15px',
              lineHeight: '1.5'
            }}>
              Get weekly plant care tips, seasonal guides, and exclusive offers on new premium arrivals!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '12px 15px',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '25px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none',
                  backdropFilter: 'blur(10px)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#22c55e';
                  e.target.style.boxShadow = '0 0 15px rgba(34, 197, 94, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(34, 197, 94, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <motion.button
                style={{
                  padding: '12px 20px',
                  background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'linear-gradient(45deg, #16a34a, #15803d)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Handle newsletter signup
                  console.log('Newsletter signup');
                }}
              >
                🌱 Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap',
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            border: '1px solid rgba(34, 197, 94, 0.2)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div style={{ textAlign: 'center' }}>
            <FaShieldAlt style={{ fontSize: '2rem', color: '#22c55e', marginBottom: '10px' }} />
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '600' }}>Secure Payment</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaTruck style={{ fontSize: '2rem', color: '#22c55e', marginBottom: '10px' }} />
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '600' }}>Free Delivery</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaAward style={{ fontSize: '2rem', color: '#22c55e', marginBottom: '10px' }} />
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '600' }}>Premium Quality</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaStar style={{ fontSize: '2rem', color: '#22c55e', marginBottom: '10px' }} />
            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: '600' }}>5-Star Service</div>
          </div>
        </motion.div>

        {/* Social Media & Copyright */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px'
        }}>
          {/* Enhanced Social Media Icons */}
          <motion.div
            style={{
              display: 'flex',
              gap: '20px'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { Icon: FaInstagram, color: '#E4405F', label: 'Instagram' },
              { Icon: FaFacebook, color: '#1877F2', label: 'Facebook' },
              { Icon: FaPinterest, color: '#BD081C', label: 'Pinterest' },
              { Icon: FaTwitter, color: '#1DA1F2', label: 'Twitter' },
              { Icon: FaYoutube, color: '#FF0000', label: 'YouTube' },
              { Icon: FaTiktok, color: '#000000', label: 'TikTok' }
            ].map(({ Icon, color, label }, index) => (
              <motion.a
                key={label}
                href="#"
                style={{
                  color: '#cbd5e1',
                  fontSize: '1.5rem',
                  padding: '15px',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '50px',
                  height: '50px'
                }}
                whileHover={{
                  scale: 1.2,
                  color: color,
                  background: `rgba(${color === '#E4405F' ? '228,64,95' : color === '#1877F2' ? '24,119,242' : color === '#BD081C' ? '189,8,28' : color === '#1DA1F2' ? '29,161,242' : color === '#FF0000' ? '255,0,0' : '0,0,0'}, 0.1)`,
                  borderColor: color,
                  rotate: 15
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright & Legal */}
          <motion.div
            style={{
              display: 'flex',
              gap: '30px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.span
              style={{
                color: '#22c55e',
                fontSize: '1rem',
                fontWeight: 600,
                background: 'rgba(34, 197, 94, 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}
              whileHover={{
                scale: 1.05,
                background: 'rgba(34, 197, 94, 0.15)'
              }}
            >
              © 2025 GreenNest. All rights reserved.
            </motion.span>

            <motion.span
              style={{
                color: '#22c55e',
                fontSize: '1rem',
                fontWeight: 600,
                background: 'rgba(34, 197, 94, 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}
              whileHover={{
                scale: 1.05,
                background: 'rgba(34, 197, 94, 0.15)'
              }}
            >
              🌍 Eco-Friendly & Sustainable
            </motion.span>

            <motion.span
              style={{
                color: '#22c55e',
                fontSize: '1rem',
                fontWeight: 600,
                background: 'rgba(34, 197, 94, 0.1)',
                padding: '10px 20px',
                borderRadius: '25px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}
              whileHover={{
                scale: 1.05,
                background: 'rgba(34, 197, 94, 0.15)'
              }}
            >
              Made with 🌱 Love & React
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
