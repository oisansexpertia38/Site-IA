import React, { useState, useEffect } from 'react';
import { Activity, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Architecte de Solutions IA & Consultant en Transformation.";
  
  useEffect(() => {
    let index = 0;
    // Utilisation de slice pour éviter les doublons en StrictMode
    const timer = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));
      if (index === fullText.length) clearInterval(timer);
    }, 40); // Vitesse un peu plus rapide pour le dynamisme
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 scale-105"
          style={{ filter: 'grayscale(80%) contrast(1.2) hue-rotate(10deg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950"></div>
        
        {/* Particle Network Effect */}
        <ParticleBackground />

        {/* Subtle color glow matching logo */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-logo-blue/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-logo-green/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-900/80 border border-logo-teal/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,156,166,0.15)] animate-in slide-in-from-top-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-logo-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-logo-green"></span>
            </span>
            <span className="text-logo-teal text-xs md:text-sm font-semibold tracking-widest uppercase">
              Oisans Expert IA
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-in slide-in-from-left-4 duration-700 delay-100">
            L'Intelligence Artificielle <br />
            au Service de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-teal to-logo-green">ROI</span>.
          </h1>
          
          {/* Subtitle with Typewriter Effect */}
          <div className="flex flex-col md:flex-row gap-6 md:items-start mb-10 min-h-[80px] md:min-h-0">
            <div className="w-1 h-20 bg-gradient-to-b from-logo-teal to-logo-green hidden md:block rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
              <span className="text-white font-medium border-r-2 border-logo-green pr-1 animate-pulse min-h-[1.5em] inline-block">
                {text}
              </span> 
              <br />
              <span className="animate-in fade-in duration-1000 delay-1000 block mt-2">
                De l'Audit stratégique à l'automatisation pérenne de vos processus. Faites le choix de la valeur concrète.
              </span>
            </p>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link 
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-white to-slate-200 rounded-lg hover:to-logo-green hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(122,184,14,0.4)] transform hover:-translate-y-1"
            >
              Démarrer mon Audit IA
              <Activity className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform text-logo-blue group-hover:text-white" />
            </Link>
            <Link 
              to="/services"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-all duration-300 hover:border-logo-teal bg-slate-900/50 backdrop-blur-sm"
            >
              Découvrir les services
              <ChevronRight className="ml-1 w-4 h-4 text-slate-500 group-hover:text-logo-green transition-colors" />
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="mt-16 pt-8 border-t border-slate-800/50 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in duration-1000 delay-500">
            <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 font-display">+30%</p>
              <p className="text-xs text-logo-teal uppercase tracking-wide mt-1 font-semibold">Productivité</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 font-display">6 Mois</p>
              <p className="text-xs text-logo-teal uppercase tracking-wide mt-1 font-semibold">ROI Garanti</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 font-display">100%</p>
              <p className="text-xs text-logo-teal uppercase tracking-wide mt-1 font-semibold">Adoption</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-logo-blue via-logo-teal to-logo-green opacity-50"></div>
    </section>
  );
};

export default Hero;