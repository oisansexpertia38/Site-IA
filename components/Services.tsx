import React, { useRef, useState } from 'react';
import { Bot, Cpu, GraduationCap, ArrowRight, LayoutGrid, Workflow } from 'lucide-react';
import { ServicePillar } from '../types';
import { Link } from 'react-router-dom';

export const servicesData: ServicePillar[] = [
  {
    id: 1,
    title: "CRÉATION DE SITES INTERNET",
    icon: "saas",
    description: "L’image digitale au service de votre activité. Des sites modernes, rapides et intelligents, prêts à accueillir vos clients 24h/24. Pack Vitrine, E-Commerce ou Sur-mesure.",
    cta: "Voir les Packs Web"
  },
  {
    id: 2,
    title: "CHATBOT IA",
    icon: "chatbot",
    description: "L’assistant digital qui parle à vos clients. L’intelligence artificielle au service de la relation client 24h/24 sur site web, Messenger ou WhatsApp. Réduit les interruptions de travail.",
    cta: "Voir les Packs Chatbot"
  },
  {
    id: 3,
    title: "AUTOMATISATION IA",
    icon: "automation",
    description: "L’intelligence qui travaille à votre place. Déléguez les tâches répétitives (relances, devis, facturation) à une IA fiable. Offrez du temps à votre équipe et de la fluidité à votre entreprise.",
    cta: "Voir les Packs Auto"
  },
  {
    id: 4,
    title: "FORMATIONS IA",
    icon: "training",
    description: "Devenez acteur de votre transformation. Formations concrètes (Découverte, Avancée, Expert) pour enseignants, entrepreneurs et artisans. L'IA n'est pas un gadget, c'est un outil du présent.",
    cta: "Voir les Formations"
  }
];

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'saas': return <LayoutGrid className="w-8 h-8 text-logo-teal" />;
    case 'chatbot': return <Bot className="w-8 h-8 text-logo-blue" />;
    case 'automation': return <Workflow className="w-8 h-8 text-logo-green" />;
    case 'training': return <GraduationCap className="w-8 h-8 text-white" />;
    default: return <Cpu className="w-8 h-8" />;
  }
};

const ServiceCard: React.FC<{ service: ServicePillar; index: number }> = ({ service, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${position.x}px`, '--mouse-y': `${position.y}px` } as React.CSSProperties}
      className="group spotlight-card relative p-8 glass rounded-3xl hover:border-logo-teal/30 transition-all duration-500 hover:shadow-2xl hover:shadow-logo-teal/10 flex flex-col hover:-translate-y-2 overflow-hidden"
    >
      {/* Subtle Gradient Overlay on Hover handled by CSS 'spotlight-card' */}

      <div className="flex items-start justify-between mb-8 relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:border-logo-teal/50 transition-all duration-300 shadow-lg shadow-black/50">
          {getIcon(service.icon)}
        </div>
        
        {/* Number Watermark */}
        <div className="text-5xl font-display font-bold text-slate-800/30 group-hover:text-logo-teal/20 transition-colors select-none">
          0{index + 1}
        </div>
      </div>
      
      <h4 className="font-display text-xl font-bold text-white mb-4 pr-4 group-hover:text-logo-green transition-colors uppercase tracking-wide relative z-10">
        {service.title}
      </h4>
      
      <p className="text-slate-400 mb-8 flex-grow leading-relaxed text-sm relative z-10 font-light border-l-2 border-slate-800 pl-4 group-hover:border-logo-teal/30 transition-colors">
        {service.description}
      </p>
      
      <div className="mt-auto relative z-10 pt-6 border-t border-slate-800/50">
        <Link 
          to={`/services?tab=${service.icon}`} 
          className="inline-flex items-center text-sm font-bold text-white hover:text-logo-teal transition-colors uppercase tracking-wider group/link"
        >
          <span className="border-b border-transparent group-hover/link:border-logo-teal pb-0.5 transition-all">
            {service.cta}
          </span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1 text-logo-green" />
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Moving Aurora Blobs */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-logo-blue/20 rounded-full blur-[120px] pointer-events-none animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-logo-teal/20 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-logo-green uppercase mb-4 animate-fade-up">Notre Expertise</h2>
          <h3 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>Nos Solutions IA & Digitales</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-logo-blue via-logo-teal to-logo-green mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto font-light animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Une approche globale : de la structure web à l'intelligence artificielle, en passant par l'automatisation des processus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;