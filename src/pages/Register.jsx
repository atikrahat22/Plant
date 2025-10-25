import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function Register(){
  const { register, updateUser, googleLogin } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{ document.title = 'GreenNest | Join Us'; },[]);

  const validatePassword = (pwd) => {
    const errors = [];
    if (!/(?=.*[a-z])/.test(pwd)) errors.push('Must have a lowercase letter');
    if (!/(?=.*[A-Z])/.test(pwd)) errors.push('Must have an uppercase letter');
    if (pwd.length < 6) errors.push('Must be at least 6 characters');
    return errors;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordErrors(validatePassword(newPassword));
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (passwordErrors.length > 0) {
      toast.error('Please fix password requirements');
      return;
    }
    setLoading(true);
    try{
      const cred = await register(email, password);
      await updateUser({ displayName: name, photoURL: photo });
      toast.success('🌱 Welcome to GreenNest! Your account has been created.');
      navigate('/');
    }catch(err){
      toast.error(err.message || 'Registration failed. Please try again.');
    }
    finally { setLoading(false); }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await googleLogin();
      toast.success('🌱 Successfully registered with Google!');
      navigate('/');
    } catch(err) {
      toast.error(err.message || 'Google registration failed. Please try again.');
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
          🌱 Join GreenNest
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
              👤 Full Name
            </label>
            <input
              className="input"
              placeholder="Enter your full name"
              value={name}
              onChange={e=>setName(e.target.value)}
              style={{
                border: '1px solid rgba(22, 163, 74, 0.3)',
                background: 'rgba(22, 163, 74, 0.1)',
                color: '#16a34a',
                textAlign: 'center',
                fontWeight: 600,
                marginBottom: 15
              }}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
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
              type="email"
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
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
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
              📸 Photo URL (Optional)
            </label>
            <input
              className="input"
              placeholder="Enter photo URL"
              value={photo}
              onChange={e=>setPhoto(e.target.value)}
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
            transition={{ delay: 0.9 }}
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
                placeholder="Create a strong password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                style={{
                  border: passwordErrors.length > 0 ? '1px solid #ef4444' : '1px solid rgba(22, 163, 74, 0.3)',
                  background: passwordErrors.length > 0 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(22, 163, 74, 0.1)',
                  color: passwordErrors.length > 0 ? '#ef4444' : '#16a34a',
                  textAlign: 'center',
                  fontWeight: 600,
                  marginBottom: 10,
                  paddingRight: '40px',
                  width: '100%'
                }}
                required
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
                  color: passwordErrors.length > 0 ? '#ef4444' : '#16a34a',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {passwordErrors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 8,
                  padding: 10,
                  marginBottom: 15
                }}
              >
                {passwordErrors.map((error, index) => (
                  <div key={index} style={{ color: '#ef4444', fontSize: '0.8rem', marginBottom: 3 }}>
                    ❌ {error}
                  </div>
                ))}
              </motion.div>
            )}
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
            transition={{ delay: 1.0 }}
            whileHover={{ scale: loading ? 1 : 1.05 }}
            whileTap={{ scale: loading ? 1 : 0.95 }}
          >
            {loading ? '🔄 Creating Account...' : '🌱 Create Account'}
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
              to="/login"
              style={{
                color: '#16a34a',
                textDecoration: 'none',
                fontSize: '0.9rem',
                textShadow: '0 0 5px rgba(22, 163, 74, 0.3)'
              }}
            >
              🌱 Already have an account? Login
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
