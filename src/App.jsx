import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SplashScreen from '@/components/SplashScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import ProfilePage from '@/pages/ProfilePage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(
    localStorage.getItem('hasSeenOnboarding') === 'true'
  );
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    // Simulate loading time for splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const completeOnboarding = () => {
    localStorage.setItem('hasSeenOnboarding', 'true');
    setHasSeenOnboarding(true);
  };
  
  // Show splash screen
  if (isLoading) {
    return <SplashScreen />;
  }
  
  // Show onboarding if user hasn't seen it yet
  if (!hasSeenOnboarding && isHomePage) {
    return <OnboardingScreen onComplete={completeOnboarding} />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
      <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="zapt-badge">
        Made on ZAPT
      </a>
    </div>
  );
}