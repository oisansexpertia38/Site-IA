import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Fonction ultra-robuste pour récupérer la clé API dans tous les environnements (Vite, Webpack, Netlify)
const getApiKey = (): string => {
  // 1. Essayer la méthode standard Vite (import.meta.env)
  try {
    // @ts-ignore
    if (import.meta && import.meta.env) {
      // @ts-ignore
      if (import.meta.env.VITE_API_KEY) return import.meta.env.VITE_API_KEY;
      // @ts-ignore
      if (import.meta.env.API_KEY) return import.meta.env.API_KEY;
    }
  } catch (e) {
    // Ignorer si import.meta n'existe pas
  }

  // 2. Essayer la méthode standard Node/Webpack (process.env)
  try {
    if (typeof process !== 'undefined' && process.env) {
      if (process.env.VITE_API_KEY) return process.env.VITE_API_KEY;
      if (process.env.API_KEY) return process.env.API_KEY;
    }
  } catch (e) {
    // Ignorer les erreurs d'accès à process
  }

  return '';
};

const apiKey = getApiKey();

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
} else {
  console.warn("API Key manquante. Le Chatbot ne fonctionnera pas. Assurez-vous d'avoir défini VITE_API_KEY ou API_KEY sur Netlify.");
}

// Base de connaissances pour le bot (Données issues de ServicesPage.tsx)
const KNOWLEDGE_BASE = `
CATALOGUE SERVICES & PRIX:

1. CRÉATION SITES WEB (SAAS/VITRINE)
- Pack Vitrine Essentiel: 1100€ (+35€/mois maint.). 3 pages, Design Pro, SEO base, Hébergement inclus.
- E-Commerce Express: 2500€ (+59€/mois maint.). Jusqu'à 20 produits, Paiement Stripe/PayPal, Stocks.
- Pack Premium: 4500€ (+99€/mois maint.). Sur-mesure, 10 pages, Intégration CRM/Résa, SEO avancé, Assistant IA intégré.
- Options: Multilingue (250€), SEO Local (300€).

2. CHATBOT IA
- Pack Starter: 1350€. Web ou Messenger, FAQ auto, Design simple, Délai 2-4 semaines.
- Pack Pro (Best Seller): 3000€. +Intégration CRM/Agenda, Automatisations Leads/SMS, Analytics.
- Pack Premium: 6500€. UX 100% perso, Maintenance 12 mois, Formation équipe.
- Maintenance Annuelle: 49€/mois.

3. AUTOMATISATION IA (MAKE/N8N)
- Pack Starter: 850€. 1 tâche simple (ex: relance), Config Make/n8n, 1h formation.
- Pack Pro: 2400€. Multi-étapes, Synchro CRM/Sheets/Gmail, Support prioritaire.
- Pack Premium: 6000€. Workflows IA complexes (NLP), API custom.
- Maintenance: 59€/mois.

4. FORMATIONS IA
- Découverte (4h): 180€/pers (ou 1500€ groupe 10). Comprendre IA, ChatGPT, Canva.
- Avancée (7h): 290€/pers (ou 2400€ groupe 10). Prompts, Automatisation mails, Notion.
- Expert (10h): 450€/pers (ou 3800€ groupe 10). Workflows Make, Création Chatbot, Bases de données.
`;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the specialized virtual assistant for "Oisans Expert IA".
      Your persona is strictly professional, strategic, and focused on ROI. 
      You are embodying the founder, Mickaël Simonutti, who is a "Consultant-Entrepreneur".
      
      CORE MISSION:
      "Sort the buzz from the concrete value."
      Help business owners avoid costly, useless POCs and focus on measurable productivity gains.

      KNOWLEDGE BASE (USE THIS FOR PRICE QUOTES):
      ${KNOWLEDGE_BASE}

      KEY FACTS TO USE:
      - 30% productivity potential via automation.
      - ROI guaranteed within 6 months.
      - 100% adoption rate via training.
      
      TONE:
      - Expert, Direct, Reassuring. 
      - Use "Nous" (We) to represent the agency.
      - Do not be overly enthusiastic; be grounded and business-oriented.
      - If a user asks for a price, GIVE THE EXACT PRICE from the Knowledge Base. Don't be vague.
      - If the user's need doesn't fit a pack, propose a "Devis sur mesure" or an "Audit préalable".

      GOAL:
      Drive the user to "Réserver un audit" (Book an audit) or "Envoyer un message".
      Always end your answers by asking if they want to book a free 30min discovery call.`,
    },
  });
};

export const sendMessageStream = async (
  chat: Chat, 
  message: string
): Promise<AsyncIterable<GenerateContentResponse>> => {
  try {
    const responseStream = await chat.sendMessageStream({ message });
    return responseStream;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};