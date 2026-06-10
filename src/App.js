import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

import 'aos/dist/aos.css';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Fleet = lazy(() => import('./pages/Fleet'));
const Contact = lazy(() => import('./pages/Contact'));

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => AOS.refreshHard());
    return () => cancelAnimationFrame(frame);
  }, [location.pathname]);

  return (
    <Suspense fallback={<div className="route-loading">Loading RideX...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 550,
      easing: 'ease-out',
      once: true,
      offset: 64,
    });
  }, []);

  return (
    <Router>
      <NavigationBar />
      <main className="flex-grow-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

