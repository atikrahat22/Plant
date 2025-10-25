import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function Login(){
  const { login, googleLogin, resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const loc = useLocation();

  useEffect(()=>{ document.title = 'GreenNest | Login'; if (loc.state?.email) setEmail(loc.state.email); },[]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      await login(email, password);
      toast.success('🌱 Welcome back to GreenNest!');
      navigate('/');
    }catch(err){
      toast.error(err.message || 'Login failed. Please try again.');
    }
    finally { setLoading(false); }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleLogin();
      toast.success('🌱 Successfully logged in with Google!');
      navigate('/');
    } catch(err) {
      toast.error(err.message || 'Google login failed. Please try again.');
    }
    finally { setLoading(false); }
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
          maxWidth: 450,
          margin: '0 auto'
        }}
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          style={{
            textAlign: 'center',
            color: '#16a34a',
            fontSize: '2.2rem',
            marginBottom: 25,
            textShadow: '0 0 15px rgba(22, 163, 74, 0.6)'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          🌱 Welcome Back to GreenNest
        </motion.h2>

        <motion.form
          className="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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
            transition={{ delay: 0.6 }}
          >
            <label
              style={{
                color: '#15803d',
                fontWeight: 600,
                fontSize: '1rem',
                marginBottom: 8,
                display: 'block',
                textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
              }}
            >
              📧 Email Address
            </label>
            <input
              className="input"
              placeholder="Enter your email address"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              style={{
                border: '1px solid rgba(22, 163, 74, 0.3)',
                background: 'rgba(22, 163, 74, 0.1)',
                color: '#16a34a',
                textAlign: 'center',
                fontWeight: 600,
                marginBottom: 15
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{ position: 'relative' }}
          >
            <label
              style={{
                color: '#15803d',
                fontWeight: 600,
                fontSize: '1rem',
                marginBottom: 8,
                display: 'block',
                textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
              }}
            >
              🔑 Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                className="input"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={e=>setPassword(e.target.value)}
                style={{
                  border: '1px solid rgba(22, 163, 74, 0.3)',
                  background: 'rgba(22, 163, 74, 0.1)',
                  color: '#16a34a',
                  textAlign: 'center',
                  fontWeight: 600,
                  marginBottom: 20,
                  paddingRight: '40px',
                  width: '100%'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#16a34a',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </motion.div>

          <motion.button
            className="button"
            type="submit"
            disabled={loading}
            style={{
              background: 'linear-gradient(135deg, #4ade80, #16a34a)',
              fontSize: '1.1rem',
              padding: '15px 30px',
              width: '100%',
              opacity: loading ? 0.7 : 1,
              boxShadow: loading ? 'none' : '0 8px 25px rgba(74, 222, 128, 0.4)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
          >
            {loading ? '🔄 Logging in...' : '🌱 Login'}
          </motion.button>
        </motion.form>

        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '20px 0',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(22,163,74,0.3), transparent)'
          }} />
          <span style={{
            padding: '0 15px',
            color: '#15803d',
            fontSize: '0.9rem',
            textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
          }}>
            or
          </span>
          <div style={{
            flex: 1,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(22,163,74,0.3), transparent)'
          }} />
        </motion.div>

        <motion.button
          className="button secondary"
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            width: '100%',
            marginBottom: 15,
            background: 'rgba(22,163,74,0.1)',
            border: '2px solid rgba(22,163,74,0.3)',
            color: '#16a34a',
            fontSize: '1rem',
            padding: '12px 20px'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
        >
          {loading ? '🔄 Connecting...' : '🌐 Continue with Google'}
        </motion.button>

        <motion.div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/forgot-password"
              state={{ email }}
              style={{
                color: '#16a34a',
                textDecoration: 'none',
                fontSize: '0.9rem',
                textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
              }}
            >
              🔑 Forgot your password?
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/register"
              style={{
                color: '#15803d',
                textDecoration: 'none',
                fontSize: '0.9rem',
                textShadow: '0 0 5px rgba(21, 128, 61, 0.3)'
              }}
            >
              🌱 Don't have an account? Join GreenNest
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
