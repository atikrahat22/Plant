import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ForgotPassword(){
  const { resetPassword } = useAuth();
  const loc = useLocation();
  const [email, setEmail] = useState(loc.state?.email || '');

  useEffect(()=>{ document.title = 'GameHub | Reset Password'; },[]);

  const handle = async (e)=>{
    e.preventDefault();
    try{
      await resetPassword(email);
      // Redirect to Gmail after sending reset email
      window.open('https://mail.google.com', '_blank');
      alert('📧 Reset email sent! Check your Gmail for the password reset link.');
    }catch(err){ alert(err.message); }
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: 30 }}
    >
      <motion.div
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
          padding: 35,
          borderRadius: 25,
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          maxWidth: 500,
          margin: '0 auto'
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          style={{
            textAlign: 'center',
            color: '#ff006e',
            fontSize: '2.2rem',
            marginBottom: 15,
            textShadow: '0 0 15px rgba(255, 0, 110, 0.6)'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          🔑 Reset Password
        </motion.h2>

        <motion.p
          style={{
            textAlign: 'center',
            color: '#ffbe0b',
            fontSize: '1rem',
            marginBottom: 25,
            textShadow: '0 0 5px rgba(255, 190, 11, 0.3)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Enter your email address and we'll send you a link to reset your password.
        </motion.p>

        <motion.form
          className="form"
          onSubmit={handle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            padding: 0
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label
              style={{
                color: '#00ffff',
                fontWeight: 600,
                fontSize: '1rem',
                marginBottom: 8,
                display: 'block',
                textShadow: '0 0 5px rgba(0, 255, 255, 0.3)'
              }}
            >
              📧 Email Address
            </label>
            <input
              className="input"
              placeholder="Enter your email address"
              type="email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
              style={{
                border: '1px solid rgba(0, 255, 255, 0.3)',
                background: 'rgba(0, 255, 255, 0.1)',
                color: '#00ffff',
                textAlign: 'center',
                fontWeight: 600,
                marginBottom: 20
              }}
            />
          </motion.div>

          <motion.button
            className="button"
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #ff006e, #8338ec, #00ffff)',
              backgroundSize: '200% 200%',
              animation: 'rainbow 3s ease-in-out infinite',
              fontSize: '1.1rem',
              padding: '15px 30px',
              width: '100%'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 Send Reset Email
          </motion.button>
        </motion.form>

        <motion.div
          style={{
            marginTop: 20,
            padding: 15,
            background: 'rgba(0, 255, 255, 0.05)',
            borderRadius: 15,
            border: '1px solid rgba(0, 255, 255, 0.2)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.p
            style={{
              color: '#00ffff',
              fontSize: '0.9rem',
              margin: 0,
              textAlign: 'center',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.3)'
            }}
            animate={{
              textShadow: [
                '0 0 5px rgba(0, 255, 255, 0.3)',
                '0 0 15px rgba(0, 255, 255, 0.6)',
                '0 0 5px rgba(0, 255, 255, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💡 After clicking reset, check your Gmail for the password reset link. We'll redirect you there automatically!
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
