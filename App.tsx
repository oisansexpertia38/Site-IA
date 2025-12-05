import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import MethodPage from './pages/MethodPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <CustomCursor />
      <ScrollProgress />
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-logo-green/30 font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/methode" element={<MethodPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
      </div>
    </HashRouter>
  );
};

export default App;