import React from 'react';
import { ShieldCheck, TrendingUp, Briefcase } from 'lucide-react';

const FounderAdvantage: React.FC = () => (
  <section className="py-24 bg-slate-900 relative overflow-hidden">
    <div className="absolute left-0 top-0 w-1/2 h-full bg-slate-950/50 skew-x-12 -translate-x-24"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-5/12 relative group">
           {/* Decorative Border */}
           <div className="absolute -inset-2 bg-gradient-to-r from-logo-teal to-logo-green rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
           
           <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
             <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
              alt="Architecture IA & Data - Digital Mind" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
            />
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
               <h3 className="font-display text-white font-bold text-2xl">Expertise Hybride</h3>
               <p className="text-logo-green font-medium tracking-wider text-sm mt-1 uppercase">Tech & Stratégie Business</p>
            </div>
           </div>
        </div>
        
        <div className="lg:w-7/12">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-logo-teal uppercase bg-slate-950 rounded-full border border-logo-teal/30">
            L'Humain au cœur de la Tech
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            L'Avantage Oisans Expert IA : <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-teal to-logo-green">Consultant-Entrepreneur</span>
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-logo-green">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Vision Business</h3>
                <p className="text-slate-400 leading-relaxed font-light">Une approche orientée ROI, issue de l'expérience de direction d'entreprise. Nous ne faisons pas de la tech pour la tech, mais pour la croissance réelle.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-logo-teal">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Expertise Terrain</h3>
                <p className="text-slate-400 leading-relaxed font-light">Compréhension rapide des processus Logistiques, Transport et PME/ETI. Nous parlons le même langage que vos équipes opérationnelles.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700 text-logo-blue">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Leadership Tech</h3>
                <p className="text-slate-400 leading-relaxed font-light">Capacité à prendre le rôle de Tech Lead et à encadrer le delivery pour garantir la qualité technique et la sécurité des solutions livrées.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderAdvantage;