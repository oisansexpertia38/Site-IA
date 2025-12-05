import React from 'react';
import { Linkedin, Mail, MapPin, ChevronRight, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
    {/* Decorative top border gradient */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-logo-blue via-logo-teal to-logo-green"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5">
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <span className="font-display text-2xl font-bold text-white tracking-tight group-hover:opacity-90 transition-opacity">
              OISANS <span className="text-logo-green">EXPERT IA</span>
            </span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed font-light">
            Propulsez votre entreprise dans l'ère cognitive avec une approche pragmatique, éthique et centrée sur la valeur.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-logo-blue hover:text-white hover:bg-logo-blue transition-all group" aria-label="LinkedIn">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-pink-600 hover:text-white hover:bg-pink-600 transition-all group" aria-label="Instagram">
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-white hover:bg-blue-600 transition-all group" aria-label="Facebook">
              <Facebook size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:oisans.expert.ia@gmail.com" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-logo-green hover:text-white hover:bg-logo-green transition-all group" aria-label="Email">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <h4 className="font-display text-white font-bold mb-6 tracking-wide uppercase text-sm border-l-2 border-logo-teal pl-3">Liens Rapides</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/" className="hover:text-logo-green transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-logo-teal group-hover:translate-x-1 transition-transform"/> Accueil</Link></li>
            <li><Link to="/services" className="hover:text-logo-green transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-logo-teal group-hover:translate-x-1 transition-transform"/> Services</Link></li>
            <li><Link to="/methode" className="hover:text-logo-green transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-logo-teal group-hover:translate-x-1 transition-transform"/> Notre Méthode</Link></li>
            <li><Link to="/contact" className="hover:text-logo-green transition-colors flex items-center gap-2 group"><ChevronRight size={14} className="text-logo-teal group-hover:translate-x-1 transition-transform"/> Contact</Link></li>
          </ul>
        </div>
        
        <div className="lg:col-span-4">
          <h4 className="font-display text-white font-bold mb-6 tracking-wide uppercase text-sm border-l-2 border-logo-green pl-3">Confiance & Certifications</h4>
          <div className="flex flex-wrap gap-4">
             <div className="flex-1 min-w-[140px] p-4 bg-slate-900/50 rounded-lg border border-slate-800 text-center hover:border-logo-blue/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={12} className="text-slate-500"/>
                </div>
                <span className="text-slate-300 font-bold tracking-widest text-sm block group-hover:text-white transition-colors">MALT</span>
                <span className="text-[10px] text-logo-teal uppercase font-bold tracking-wider mt-1 block">Super Malter</span>
             </div>
             <div className="flex-1 min-w-[140px] p-4 bg-slate-900/50 rounded-lg border border-slate-800 text-center hover:border-logo-green/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight size={12} className="text-slate-500"/>
                </div>
                <span className="text-slate-300 font-bold tracking-widest text-sm block group-hover:text-white transition-colors">PARTNER</span>
                <span className="text-[10px] text-logo-green uppercase font-bold tracking-wider mt-1 block">Solutions IA</span>
             </div>
          </div>
          <div className="mt-6 flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={16} className="text-logo-teal" />
            <span>Basé en Oisans & Grenoble (38)</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs">
        <p>&copy; {new Date().getFullYear()} Oisans Expert IA. Tous droits réservés.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-logo-green transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-logo-green transition-colors">Politique de Confidentialité</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;