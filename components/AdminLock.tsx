import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Save, X, Key } from 'lucide-react';
import { STORAGE_API_KEY } from '../services/geminiService';

const AdminLock: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [savedKey, setSavedKey] = useState('');

  // Vérifier si une clé existe déjà
  useEffect(() => {
    const existingKey = localStorage.getItem(STORAGE_API_KEY);
    if (existingKey) {
      setSavedKey(existingKey);
      setApiKey(existingKey);
    }
  }, []);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Mot de passe simple pour le propriétaire
    if (password === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Code incorrect');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.startsWith('AIza')) {
      localStorage.setItem(STORAGE_API_KEY, apiKey);
      setSavedKey(apiKey);
      alert('Clé API sauvegardée ! Le site va se recharger.');
      window.location.reload();
    } else {
      alert('La clé semble invalide (elle doit commencer par AIza)');
    }
  };

  const handleClear = () => {
    if (confirm('Voulez-vous supprimer la clé stockée ?')) {
      localStorage.removeItem(STORAGE_API_KEY);
      setSavedKey('');
      setApiKey('');
      alert('Clé supprimée.');
      window.location.reload();
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-[99999] p-3 rounded-full bg-slate-800/80 border border-slate-600 text-slate-300 hover:text-white hover:bg-logo-teal hover:border-logo-teal transition-all duration-300 shadow-lg backdrop-blur-sm group"
        title="Configuration Admin"
      >
        {savedKey ? (
          <Lock size={20} className="group-hover:scale-110 transition-transform" />
        ) : (
          <Unlock size={20} className="text-red-400 animate-pulse group-hover:text-white group-hover:animate-none" />
        )}
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Key className="text-logo-teal" /> Configuration Admin
        </h3>

        {!isAuthenticated ? (
          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Code Secret</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-logo-teal outline-none transition-colors"
                placeholder="Entrez le code..."
                autoFocus
              />
            </div>
            <button type="submit" className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold transition-colors">
              Déverrouiller
            </button>
          </form>
        ) : (
          <form onSubmit={handleSave} className="space-y-6">
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800">
               <p className="text-sm text-slate-400 mb-2">Statut actuel :</p>
               {savedKey ? (
                 <div className="flex items-center gap-2 text-green-500 font-bold text-sm">
                   <Lock size={14} /> Clé active et sécurisée
                 </div>
               ) : (
                 <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                   <Unlock size={14} /> Aucune clé configurée
                 </div>
               )}
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Clé API Gemini (AIza...)</label>
              <input 
                type="text" 
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-logo-green outline-none font-mono text-xs shadow-inner"
                placeholder="AIzaSy..."
                autoFocus
              />
            </div>

            <div className="flex gap-3">
              <button type="submit" className="flex-1 py-3 bg-gradient-to-r from-logo-teal to-logo-green hover:shadow-lg text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-all">
                <Save size={18} /> Sauvegarder
              </button>
              {savedKey && (
                <button type="button" onClick={handleClear} className="px-4 py-3 bg-red-900/30 hover:bg-red-900/50 text-red-200 border border-red-900/50 rounded-lg transition-colors">
                  <X size={18} />
                </button>
              )}
            </div>
            <p className="text-xs text-slate-500 text-center">
              La clé est stockée localement dans votre navigateur.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLock;