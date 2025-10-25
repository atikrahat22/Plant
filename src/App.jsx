import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PlantDetails from './pages/PlantDetails';
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFound';
import PrivateRoute from './routes/PrivateRoute';

export default function App(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/plants/:id" element={<PrivateRoute><PlantDetails /></PrivateRoute>} />
        <Route path="/my-profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          '--toastify-color-success': '#4ade80',
          '--toastify-color-error': '#ef4444',
          '--toastify-color-warning': '#f59e0b',
          '--toastify-color-info': '#3b82f6',
        }}
      />
    </div>
  );
}
