import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Linkedin, Instagram, Facebook, Calendar, Check, Loader2, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'message' | 'calendar'>('message');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: 'Demande d\'audit',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Chargement du script Calendly lorsque l'onglet est actif
  useEffect(() => {
    if (activeTab === 'calendar') {
      const head = document.querySelector("head");
      const script = document.createElement("script");
      script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
      script.setAttribute("async", "true");
      head?.appendChild(script);

      return () => {
        if (head && script.parentNode === head) {
          head.removeChild(script);
        }
      };
    }
  }, [activeTab]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Construction du lien mailto
    const subjectEncoded = encodeURIComponent(`[Contact Site Web] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Nom: ${formData.name}\n` +
      `Entreprise: ${formData.company}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:oisans.expert.ia@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Ouverture immédiate pour éviter le blocage par le navigateur
    window.location.href = mailtoLink;
    
    // Feedback utilisateur
    setStatus('success');
    setFormData({ name: '', company: '', email: '', subject: 'Demande d\'audit', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-950 flex flex-col">
       <div className="container mx-auto px-6 py-12 flex-grow">
         <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Parlons de votre <span className="text-logo-green">Projet</span></h1>
            <p className="text-slate-400 max-w-xl mx-auto">
               Vous avez une idée, un besoin ou une simple question ? 
               Choisissez le mode de contact qui vous convient le mieux.
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Colonne Gauche : Infos Contact */}
            <div className="lg:col-span-4 space-y-8">
               <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 h-full">
                  <h3 className="text-2xl font-bold text-white mb-8">Coordonnées</h3>
                  <div className="space-y-8">
                     <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center text-logo-teal border border-slate-800 shrink-0 group-hover:border-logo-teal transition-colors">
                           <Mail size={22} />
                        </div>
                        <div>
                           <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Email</p>
                           <a href="mailto:oisans.expert.ia@gmail.com" className="text-base text-white hover:text-logo-green transition-colors break-all font-medium">oisans.expert.ia@gmail.com</a>
                        </div>
                     </div>
                     <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center text-logo-green border border-slate-800 shrink-0 group-hover:border-logo-green transition-colors">
                           <MapPin size={22} />
                        </div>
                        <div>
                           <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Localisation</p>
                           <p className="text-base text-white font-medium">Bourg d'Oisans & Grenoble (38)</p>
                        </div>
                     </div>
                     
                     <div className="pt-8 border-t border-slate-800">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-4">Suivez-nous</p>
                        <div className="flex gap-4">
                           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-logo-blue hover:text-white hover:bg-logo-blue transition-all">
                              <Linkedin size={22} />
                           </a>
                           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-pink-600 hover:text-white hover:bg-pink-600 transition-all">
                              <Instagram size={22} />
                           </a>
                           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-blue-600 hover:text-white hover:bg-blue-600 transition-all">
                              <Facebook size={22} />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Colonne Droite : Tabs (Formulaire ou Calendly) */}
            <div className="lg:col-span-8">
               <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col min-h-[600px]">
                  {/* Tabs Header */}
                  <div className="flex border-b border-slate-800">
                     <button 
                        onClick={() => setActiveTab('message')}
                        className={`flex-1 py-6 text-sm md:text-base font-bold flex items-center justify-center gap-3 transition-colors ${activeTab === 'message' ? 'bg-slate-800 text-white border-b-2 border-logo-teal' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                     >
                        <MessageSquare size={18} />
                        Envoyer un message
                     </button>
                     <button 
                        onClick={() => setActiveTab('calendar')}
                        className={`flex-1 py-6 text-sm md:text-base font-bold flex items-center justify-center gap-3 transition-colors ${activeTab === 'calendar' ? 'bg-slate-800 text-white border-b-2 border-logo-green' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                     >
                        <Calendar size={18} />
                        Réserver un créneau
                     </button>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6 md:p-10 flex-grow bg-slate-900">
                     
                     {/* FORMULAIRE */}
                     {activeTab === 'message' && (
                        <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="block text-sm font-medium text-slate-400 mb-2">Nom</label>
                                 <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-logo-teal focus:ring-1 focus:ring-logo-teal transition-colors placeholder:text-slate-600" 
                                    placeholder="Votre nom" 
                                 />
                              </div>
                              <div>
                                 <label className="block text-sm font-medium text-slate-400 mb-2">Entreprise</label>
                                 <input 
                                    type="text" 
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-logo-teal focus:ring-1 focus:ring-logo-teal transition-colors placeholder:text-slate-600" 
                                    placeholder="Votre société" 
                                 />
                              </div>
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                              <input 
                                 type="email" 
                                 name="email"
                                 required
                                 value={formData.email}
                                 onChange={handleChange}
                                 className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-logo-teal focus:ring-1 focus:ring-logo-teal transition-colors placeholder:text-slate-600" 
                                 placeholder="email@exemple.com" 
                              />
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-slate-400 mb-2">Sujet</label>
                              <div className="relative">
                                 <select 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-logo-teal focus:ring-1 focus:ring-logo-teal transition-colors appearance-none cursor-pointer"
                                 >
                                    <option>Demande d'audit</option>
                                    <option>Création de site Web / SaaS</option>
                                    <option>Chatbot IA</option>
                                    <option>Automatisation</option>
                                    <option>Formation</option>
                                    <option>Autre demande</option>
                                 </select>
                                 <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                 </div>
                              </div>
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                              <textarea 
                                 name="message"
                                 required
                                 value={formData.message}
                                 onChange={handleChange}
                                 rows={4} 
                                 className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-logo-teal focus:ring-1 focus:ring-logo-teal transition-colors placeholder:text-slate-600" 
                                 placeholder="Dites-nous en plus sur votre projet..."
                              ></textarea>
                           </div>
                           
                           <button 
                              type="submit" 
                              disabled={status === 'loading'}
                              className={`w-full py-4 font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                                 status === 'success' 
                                    ? 'bg-green-600 text-white cursor-default' 
                                    : 'bg-gradient-to-r from-logo-teal to-logo-green text-white hover:shadow-[0_0_20px_rgba(0,156,166,0.4)] hover:-translate-y-0.5'
                              }`}
                           >
                              {status === 'loading' && <Loader2 className="animate-spin" size={20} />}
                              {status === 'success' && <Check size={20} />}
                              {status === 'idle' && <Send size={18} />}
                              
                              {status === 'loading' ? 'Ouverture...' : 
                               status === 'success' ? 'Email prêt à être envoyé !' : 
                               'Envoyer ma demande'}
                           </button>
                        </form>
                     )}

                     {/* CALENDLY */}
                     {activeTab === 'calendar' && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 h-full w-full">
                           <div className="text-center mb-4">
                              <h4 className="text-white font-bold text-lg">Appel Découverte (30 min)</h4>
                              <p className="text-slate-400 text-sm">Gratuit & Sans engagement. Sélectionnez un créneau ci-dessous.</p>
                           </div>
                           {/* Widget Container */}
                           <div 
                              className="calendly-inline-widget w-full rounded-xl overflow-hidden bg-white" 
                              data-url="https://calendly.com/oisans-expert-ia/30min?hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=009ca6" 
                              style={{ minWidth: '320px', height: '650px' }} 
                           />
                        </div>
                     )}

                  </div>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default ContactPage;