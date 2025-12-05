import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check, ArrowRight, LayoutGrid, Bot, Workflow, GraduationCap, X, Plus, Star } from 'lucide-react';
import ContactCTA from '../components/ContactCTA';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('saas');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
      const element = document.getElementById('service-content');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const tabs = [
    { id: 'saas', label: 'Création Sites Web', icon: LayoutGrid },
    { id: 'chatbot', label: 'Chatbot IA', icon: Bot },
    { id: 'automation', label: 'Automatisation', icon: Workflow },
    { id: 'training', label: 'Formations IA', icon: GraduationCap },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
       <div className="container mx-auto px-6 py-12 text-center">
         <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Nos Solutions <span className="text-logo-green">Expertes</span></h1>
         <p className="text-slate-400 max-w-3xl mx-auto text-lg font-light">
            Des offres claires, chiffrées et orientées ROI. Sélectionnez votre besoin pour découvrir nos packs détaillés.
         </p>
       </div>

       {/* Tab Navigation */}
       <div className="container mx-auto px-6 mb-12" id="service-content">
          <div className="flex flex-wrap justify-center gap-4 border-b border-slate-800 pb-8">
             {tabs.map((tab) => (
                <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                      activeTab === tab.id 
                      ? 'bg-gradient-to-r from-logo-blue to-logo-teal text-white shadow-[0_0_20px_rgba(0,156,166,0.3)] transform scale-105' 
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-logo-teal hover:text-white'
                   }`}
                >
                   <tab.icon size={18} />
                   {tab.label}
                </button>
             ))}
          </div>
       </div>

       {/* Tab Content */}
       <div className="container mx-auto px-6 min-h-[600px] mb-20">
          
          {/* ==================== WEB & SAAS CONTENT ==================== */}
          {activeTab === 'saas' && (
             <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">L’image digitale au service de votre activité</h2>
                   <p className="text-slate-400 max-w-2xl mx-auto">
                     Votre présence en ligne, simple, professionnelle et adaptée à la vie oisanne. Des sites modernes, rapides et intelligents.
                   </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* Pack Vitrine */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-teal/30 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Pack Vitrine Essentiel</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-logo-teal">1 100 €</span>
                        <span className="text-sm text-slate-500 block">+ 35 €/mois (Maint.)</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        Idéal pour artisans, gîtes, restaurants et indépendants souhaitant une présence efficace.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Site moderne de 3 pages</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Design responsive & Pro</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Formulaire & SEO local base</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Hébergement & Domaine inclus</li>
                      </ul>
                      <Link to="/contact" className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Commander</Link>
                   </div>

                   {/* Pack E-Commerce */}
                   <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 border border-logo-teal/50 shadow-lg relative flex flex-col transform lg:-translate-y-4">
                      <div className="absolute top-0 right-0 bg-logo-teal text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">POPULAIRE</div>
                      <h3 className="text-xl font-bold text-white mb-2">E-Commerce Express</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-white">2 500 €</span>
                        <span className="text-sm text-slate-400 block">+ 59 €/mois (Maint.)</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        Parfait pour les commerçants souhaitant vendre en ligne (boutique fluide).
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Toutes fonctions Vitrine</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Jusqu'à 20 produits</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Paiement Sécurisé (Stripe/PayPal)</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Gestion stocks & commandes</li>
                      </ul>
                      <Link to="/contact" className="w-full py-4 bg-gradient-to-r from-logo-teal to-logo-green text-slate-950 font-bold rounded-xl hover:shadow-lg text-center transition-colors">
                        Lancer ma boutique
                      </Link>
                   </div>

                   {/* Pack Premium */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-blue/50 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Pack Premium</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-logo-blue">4 500 €</span>
                        <span className="text-sm text-slate-500 block">+ 99 €/mois (Maint.)</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        "Expérience Alpin Sur Mesure" pour hôtels, stations et entreprises ambitieuses.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Jusqu'à 10 pages sur-mesure</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Intégration CRM / Résa</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> SEO Avancé Multilingue</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> <span className="text-logo-teal font-bold">Assistant IA intégré</span></li>
                      </ul>
                      <Link to="/contact" className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Sur Devis</Link>
                   </div>
                </div>

                {/* Options Web */}
                <div className="mt-16 bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Plus className="text-logo-green" size={20}/> Options & Bundles Oisans
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-slate-400">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>Multilingue (FR/EN/DE)</span>
                      <span className="text-white font-bold">250 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>SEO Local Avancé (GMB)</span>
                      <span className="text-white font-bold">300 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-logo-teal font-semibold">Bundle Alpin Vitrine (Vitrine + Multi + Blog)</span>
                      <span className="text-white font-bold">1 400 € <span className="text-xs text-green-500">(-15%)</span></span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-logo-teal font-semibold">Bundle Alpin E-Com (E-Com + IA + SEO Local)</span>
                      <span className="text-white font-bold">3 000 € <span className="text-xs text-green-500">(-20%)</span></span>
                    </div>
                  </div>
                </div>
             </div>
          )}

          {/* ==================== CHATBOTS CONTENT ==================== */}
          {activeTab === 'chatbot' && (
             <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">L’assistant digital qui parle à vos clients</h2>
                   <p className="text-slate-400 max-w-2xl mx-auto">
                     Votre entreprise reste disponible même quand vous dormez. Répond, informe et convertit 24/7 sur site web ou WhatsApp.
                   </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* Starter */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-teal/30 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Pack Starter</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-logo-teal">1 350 €</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        "Assistant Prêt à l'Emploi". Pour artisans et petites structures. Automatisation simple.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Chatbot Web ou Messenger</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Réponses FAQ automatiques</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Design simple (thème alpin)</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Délai : 2-4 semaines</li>
                      </ul>
                      <Link to="/contact" className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Choisir Starter</Link>
                   </div>

                   {/* Pro */}
                   <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 border border-logo-green/50 shadow-lg relative flex flex-col transform lg:-translate-y-4">
                      <div className="absolute top-0 right-0 bg-logo-green text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">RECOMMANDÉ</div>
                      <h3 className="text-xl font-bold text-white mb-2">Pack Pro</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-white">3 000 €</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        "Connect & Optimise". Pour PME touristiques. Optimise le flux client et la conversion.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Tout du Starter</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Intégrations CRM/ERP/Agenda</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Automatisations (Leads, SMS)</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Analytics mensuel</li>
                      </ul>
                      <Link to="/contact" className="w-full py-4 bg-gradient-to-r from-logo-teal to-logo-green text-slate-950 font-bold rounded-xl hover:shadow-lg text-center transition-colors">
                        Choisir Pro
                      </Link>
                   </div>

                   {/* Premium */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-blue/50 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Pack Premium</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-logo-blue">6 500 €</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        "Expérience sur Mesure" pour entreprises ambitieuses et stations.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> UX/UI 100% Personnalisée</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Formation équipe (2x2h)</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Maintenance 12 mois incluse</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Suivi & Optimisation continue</li>
                      </ul>
                      <Link to="/contact" className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Contact Expert</Link>
                   </div>
                </div>

                 {/* Options Chatbot */}
                 <div className="mt-16 bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Plus className="text-logo-green" size={20}/> Options & Extensions
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-slate-400">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>Maintenance Annuelle</span>
                      <span className="text-white font-bold">49 € / mois</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>Module Rendez-vous</span>
                      <span className="text-white font-bold">+ 180 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>IA Avancée (NLP)</span>
                      <span className="text-white font-bold">+ 900 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-logo-teal font-semibold">Bundle Alpin Starter (Starter + Multi + RDV)</span>
                      <span className="text-white font-bold">1 600 € <span className="text-xs text-green-500">(-20%)</span></span>
                    </div>
                  </div>
                </div>
             </div>
          )}

          {/* ==================== AUTOMATION CONTENT ==================== */}
          {activeTab === 'automation' && (
             <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">L’intelligence qui travaille à votre place</h2>
                   <p className="text-slate-400 max-w-2xl mx-auto">
                      L’IA prend en charge vos actions répétitives, connecte vos outils (Google, mails, CRM) et fait circuler l’information sans erreur ni délai.
                   </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* Pack Starter */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-teal/30 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Pack Starter</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-logo-teal">850 €</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        "Automatisation Express". Solution clé en main pour une tâche simple du quotidien.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> 1 Tâche (ex: Relance client)</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Config via Make ou n8n</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Tests & Recettage</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Prise en main (1h)</li>
                      </ul>
                      <Link to="/contact" className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Démarrer</Link>
                   </div>

                   {/* Pack Pro */}
                   <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 border border-logo-blue/50 shadow-lg relative flex flex-col transform lg:-translate-y-4">
                      <div className="absolute top-0 right-0 bg-logo-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">BEST SELLER</div>
                      <h3 className="text-xl font-bold text-white mb-2">Pack Pro</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-white">2 400 €</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        "Connect & Flow". Pour relier plusieurs outils entre eux (CRM, Sheets, Gmail).
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Automatisations multi-étapes</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Synchro entre outils</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Analytics mensuel</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Check size={16} className="text-logo-green shrink-0" /> Support prioritaire</li>
                      </ul>
                      <Link to="/contact" className="w-full py-4 bg-gradient-to-r from-logo-teal to-logo-green text-slate-950 font-bold rounded-xl hover:shadow-lg text-center transition-colors">
                        Connecter mes outils
                      </Link>
                   </div>

                   {/* Pack Premium */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-teal/50 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Pack Premium</h3>
                      <div className="mb-6">
                        <span className="text-3xl font-display font-bold text-logo-teal">6 000 €</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                         "Flux IA sur mesure". L'automatisation comme levier stratégique de croissance.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Workflows IA Personnalisés</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Intégration API complexe</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> NLP (Langage naturel)</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Check size={16} className="text-logo-green shrink-0" /> Maintenance 12 mois</li>
                      </ul>
                      <Link to="/contact" className="w-full py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Étude sur mesure</Link>
                   </div>
                </div>

                 {/* Options Auto */}
                 <div className="mt-16 bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                  <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Plus className="text-logo-green" size={20}/> Extensions & Maintenance
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm text-slate-400">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>Maintenance Annuelle</span>
                      <span className="text-white font-bold">59 € / mois</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>Ajout 2e tâche liée</span>
                      <span className="text-white font-bold">+ 150 €</span>
                    </div>
                     <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span>Intégration API complexe</span>
                      <span className="text-white font-bold">+ 600 €</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-logo-teal font-semibold">Bundle "Flow Alpin" (Pro + API + Alertes)</span>
                      <span className="text-white font-bold">2 900 € <span className="text-xs text-green-500">(-15%)</span></span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-slate-950 rounded-lg border border-slate-800 text-center text-sm text-slate-500">
                    <p>Garantie : Optimisation gratuite si performance &lt; 20% des résultats annoncés.</p>
                  </div>
                </div>
             </div>
          )}

          {/* ==================== TRAINING CONTENT ==================== */}
          {activeTab === 'training' && (
             <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Devenez acteur de votre transformation</h2>
                   <p className="text-slate-400 max-w-2xl mx-auto">
                      "L'IA n'est pas un gadget du futur. C'est un outil du présent, au service de votre quotidien." Formations claires, concrètes et adaptées.
                   </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* Découverte */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-green/30 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Formation Découverte</h3>
                      <div className="mb-2">
                        <span className="text-3xl font-display font-bold text-logo-green">180 €</span>
                        <span className="text-sm text-slate-500"> / personne</span>
                      </div>
                      <div className="mb-6 text-xs text-slate-500 font-mono bg-slate-950 p-2 rounded">Durée : 4 heures</div>
                      
                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                         Comprendre l'essentiel et les usages immédiats de l'IA.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Comprendre ce qu'est l'IA</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Découvrir ChatGPT</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Créer avec Canva AI</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Intro automatisations simples</li>
                      </ul>
                      <div className="mt-auto">
                        <p className="text-xs text-slate-500 mb-2 text-center">Groupe 10 pers: 1 500 €</p>
                        <Link to="/contact" className="w-full block py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Réserver</Link>
                      </div>
                   </div>

                   {/* Avancée */}
                   <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-8 border border-slate-700 shadow-lg relative flex flex-col transform lg:-translate-y-4">
                      <div className="absolute top-0 right-0 bg-slate-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-2xl">POPULAIRE</div>
                      <h3 className="text-xl font-bold text-white mb-2">Formation Avancée</h3>
                      <div className="mb-2">
                        <span className="text-3xl font-display font-bold text-white">290 €</span>
                        <span className="text-sm text-slate-400"> / personne</span>
                      </div>
                      <div className="mb-6 text-xs text-slate-400 font-mono bg-slate-950 p-2 rounded">Durée : 7 heures</div>

                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                         Intégrer l'IA dans son métier et créer des usages concrets.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-white font-medium"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Structurer des prompts puissants</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Automatiser mails & réponses</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Atelier Pratique : Projet Personnel</li>
                         <li className="flex gap-3 text-sm text-white font-medium"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Outils : Notion, Canva, Réseaux</li>
                      </ul>
                      <div className="mt-auto">
                        <p className="text-xs text-slate-500 mb-2 text-center">Groupe 10 pers: 2 400 €</p>
                        <Link to="/contact" className="w-full block py-4 bg-gradient-to-r from-logo-teal to-logo-green text-slate-950 font-bold rounded-xl hover:shadow-lg text-center transition-colors">
                           Je me forme
                        </Link>
                      </div>
                   </div>

                   {/* Expert */}
                   <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-logo-teal/30 transition-colors">
                      <h3 className="text-xl font-bold text-white mb-2">Formation Expert</h3>
                      <div className="mb-2">
                        <span className="text-3xl font-display font-bold text-logo-teal">450 €</span>
                        <span className="text-sm text-slate-500"> / personne</span>
                      </div>
                      <div className="mb-6 text-xs text-slate-500 font-mono bg-slate-950 p-2 rounded">Durée : 10 heures</div>

                      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-800">
                         Concevoir ses propres outils IA : chatbots, assistants, bases de données.
                      </p>
                      <ul className="space-y-3 mb-8 flex-grow">
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Création workflows (Make/n8n)</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Conception Chatbot personnalisé</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Gestion Base de Données (Airtable)</li>
                         <li className="flex gap-3 text-sm text-slate-300"><Star size={14} className="text-logo-green shrink-0 mt-1" /> Atelier Final : Création Mini-Outil</li>
                      </ul>
                      <div className="mt-auto">
                        <p className="text-xs text-slate-500 mb-2 text-center">Groupe 10 pers: 3 800 €</p>
                        <Link to="/contact" className="w-full block py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 text-center transition-colors">Niveau Expert</Link>
                      </div>
                   </div>
                </div>

                <div className="mt-12 text-center text-sm text-slate-500">
                   <p>Formations éligibles OPCO / CPF : selon critères en cours de validation.</p>
                   <p className="mt-2">Paiement flexible : jusqu'à 3 fois sans frais.</p>
                </div>
             </div>
          )}

       </div>

       <ContactCTA />
    </div>
  );
};

export default ServicesPage;