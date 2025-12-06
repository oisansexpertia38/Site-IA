import React, { useEffect, useRef, useState } from 'react';

const ValueProposition: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="audit" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
     {/* Grid Background */}
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

     {/* Floating Blobs */}
     <div className="absolute top-0 left-1/4 w-96 h-96 bg-logo-teal/10 rounded-full blur-3xl animate-blob mix-blend-screen pointer-events-none"></div>
     <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-logo-green/10 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-screen pointer-events-none"></div>

    <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Faites le tri entre le <span className="text-slate-600 line-through decoration-red-500/50 decoration-4">buzz</span> <br/>
          et la <span className="text-logo-green">valeur concrète</span>.
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed font-light">
          Mon rôle est de vous aider à éviter les POCs coûteux et sans lendemain. <br className="hidden md:block"/> 
          Oisans Expert IA est votre partenaire pour une stratégie IA claire, intégrée et surtout, <span className="text-white font-medium border-b border-logo-teal/50">mesurable</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-logo-green/30 transition-all text-center group hover:bg-slate-900/60">
          <div className="font-display text-6xl font-bold bg-gradient-to-br from-logo-green to-emerald-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">+30%</div>
          <p className="text-slate-300 font-medium leading-relaxed">de productivité potentielle par l'automatisation.</p>
        </div>
        
        <div className="p-8 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-logo-teal/30 transition-all text-center group hover:bg-slate-900/60">
          <div className="font-display text-6xl font-bold bg-gradient-to-br from-logo-teal to-cyan-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">ROI</div>
          <p className="text-slate-300 font-medium leading-relaxed">garanti sous 6 mois pour les cas d'usage validés.</p>
        </div>
        
        <div className="p-8 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-logo-blue/30 transition-all text-center group hover:bg-slate-900/60">
          <div className="font-display text-6xl font-bold bg-gradient-to-br from-logo-blue to-indigo-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">100%</div>
          <p className="text-slate-300 font-medium leading-relaxed">d'adoption des outils par une formation ciblée.</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ValueProposition;