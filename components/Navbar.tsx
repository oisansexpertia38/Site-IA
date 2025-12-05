import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 border-b ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-slate-800 py-3' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          {/* Branding 100% Textuel - Style Cyber/Tech */}
          <div className="flex flex-col">
             <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white group-hover:opacity-100 transition-all flex items-center gap-2">
               OISANS <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-teal to-logo-green group-hover:brightness-125 transition-all">EXPERT IA</span>
               <Sparkles className="w-4 h-4 text-logo-green opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
             </span>
             <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-logo-teal transition-colors hidden sm:block">
               Solutions Digitales & Automation
             </span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
          <Link to="/" className={`${isActive('/') ? 'text-logo-green' : 'text-slate-300 hover:text-white'} transition-colors relative group`}>
            Accueil
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-logo-green transform origin-left transition-transform duration-300 ${isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/services" className={`${isActive('/services') ? 'text-logo-green' : 'text-slate-300 hover:text-white'} transition-colors relative group`}>
            Services
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-logo-green transform origin-left transition-transform duration-300 ${isActive('/services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/methode" className={`${isActive('/methode') ? 'text-logo-green' : 'text-slate-300 hover:text-white'} transition-colors relative group`}>
            Notre Méthode
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-logo-green transform origin-left transition-transform duration-300 ${isActive('/methode') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
          </Link>
          <Link to="/contact" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-logo-teal to-logo-green text-slate-950 font-bold hover:shadow-[0_0_20px_rgba(122,184,14,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group">
            <span className="relative z-10">Démarrer l'audit</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white relative z-50 p-2 hover:bg-slate-800 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 animate-in slide-in-from-right-full duration-300">
           <Link to="/" className="text-2xl font-display font-bold text-white hover:text-logo-green transition-colors">Accueil</Link>
           <Link to="/services" className="text-2xl font-display font-bold text-white hover:text-logo-green transition-colors">Services</Link>
           <Link to="/methode" className="text-2xl font-display font-bold text-white hover:text-logo-green transition-colors">Notre Méthode</Link>
           <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-logo-teal to-logo-green text-slate-950 font-bold text-xl shadow-lg shadow-logo-green/20">
            Démarrer l'audit
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;