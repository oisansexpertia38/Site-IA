import React from 'react';
import ContactCTA from '../components/ContactCTA';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';

const MethodPage: React.FC = () => {
  const steps = [
    {
       icon: Search,
       title: "1. Audit & Diagnostic",
       desc: "Nous analysons vos processus actuels, identifions les goulots d'étranglement et détectons les opportunités d'automatisation à fort ROI."
    },
    {
       icon: PenTool,
       title: "2. Architecture & Design",
       desc: "Conception de la solution sur-mesure. Choix des modèles IA, architecture des données et définition des workflows (Make, n8n, API)."
    },
    {
       icon: Rocket,
       title: "3. Intégration & Déploiement",
       desc: "Développement agile et mise en production sécurisée. Connexion à vos outils existants (CRM, ERP) sans perturber l'activité."
    },
    {
       icon: BarChart,
       title: "4. Formation & Suivi",
       desc: "Accompagnement au changement pour vos équipes. Analyse des performances post-déploiement et optimisation continue."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
       <div className="container mx-auto px-6 py-12 text-center">
         <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-logo-teal uppercase bg-slate-900 rounded-full border border-logo-teal/30">
            Notre Approche
          </div>
         <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">De l'Audit à <span className="text-logo-green">l'Excellence</span></h1>
         <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Une méthodologie rigoureuse en 4 étapes pour garantir le succès de votre transformation IA. Pas de magie, juste de l'ingénierie.
         </p>
       </div>

       <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
             {steps.map((step, idx) => (
                <div key={idx} className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-logo-teal/50 transition-colors group">
                   <div className="w-14 h-14 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-logo-blue/10 group-hover:border-logo-blue/50 transition-colors">
                      <step.icon className="w-7 h-7 text-logo-green" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                   <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
             ))}
          </div>
       </div>

       <div className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto bg-slate-900/50 p-10 rounded-3xl border border-slate-800">
             <h3 className="text-2xl font-bold text-white mb-4">Pourquoi commencer par un audit ?</h3>
             <p className="text-slate-400 mb-8">
                L'IA n'est pas une solution miracle, c'est un accélérateur. Si on accélère un mauvais processus, on va juste dans le mur plus vite. 
                L'audit permet de structurer vos données et vos besoins avant de coder la moindre ligne.
             </p>
          </div>
       </div>

       <ContactCTA />
    </div>
  );
};

export default MethodPage;