import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const PlantDetails = lazy(() => import('./pages/PlantDetails'));
const Plants = lazy(() => import('./pages/Plants'));
const Profile = lazy(() => import('./pages/Profile'));
const UpdateProfile = lazy(() => import('./pages/UpdateProfile'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivateRoute = lazy(() => import('./routes/PrivateRoute'));

export default function App(){
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/plants/:id" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute><PlantDetails /></PrivateRoute>
            </Suspense>
          } />
          <Route path="/my-profile" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute><Profile /></PrivateRoute>
            </Suspense>
          } />
          <Route path="/update-profile" element={
            <Suspense fallback={<LoadingSpinner />}>
              <PrivateRoute><UpdateProfile /></PrivateRoute>
            </Suspense>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
