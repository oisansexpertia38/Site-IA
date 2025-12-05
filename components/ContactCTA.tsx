import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA: React.FC = () => (
  <section id="contact" className="py-32 relative overflow-hidden bg-slate-950">
     <div className="absolute inset-0 bg-gradient-to-br from-logo-blue/20 to-slate-950"></div>
     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
     
     <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Transformez votre productivité <br/>dès aujourd'hui.</h2>
        <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto font-light">
          Prenez 30 minutes pour définir le potentiel IA de votre entreprise. <br/>
          <span className="font-semibold text-logo-green">Sans engagement, focus valeur.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-950 bg-gradient-to-r from-white to-slate-100 rounded-xl hover:to-logo-green hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(122,184,14,0.4)] hover:-translate-y-1">
            Réserver ma session gratuite
            <CheckCircle className="ml-2 w-5 h-5 text-logo-teal group-hover:text-white" />
          </Link>
        </div>
     </div>
  </section>
);

export default ContactCTA;