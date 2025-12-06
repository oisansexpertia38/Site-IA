import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';
import { Chat, GenerateContentResponse } from "@google/genai";

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Bonjour. Je suis l'assistant virtuel d'Oisans Expert IA. Comment puis-je vous aider à optimiser vos processus aujourd'hui ?"
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  
  // Use a ref to persist the chat session without triggering re-renders
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session on mount
    try {
      const session = createChatSession();
      if (session) {
        chatSessionRef.current = session;
      }
    } catch (error) {
      console.warn("Chat initialization failed (likely missing API key)", error);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputText.trim()) return;
    
    const userMsgId = Date.now().toString();
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      role: 'user',
      text: inputText
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');
    setLoadingState(LoadingState.LOADING);

    if (!chatSessionRef.current) {
        // Tentative de reconnexion si la session n'est pas active
        try {
            const session = createChatSession();
            chatSessionRef.current = session;
        } catch (e) {
            setLoadingState(LoadingState.ERROR);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'model',
                text: "Configuration système incomplète. Veuillez contacter l'administrateur."
            }]);
            return;
        }
    }

    try {
      const stream = await sendMessageStream(chatSessionRef.current, newUserMsg.text);
      
      const botMsgId = (Date.now() + 1).toString();
      // Initialize empty bot message
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      let accumulatedText = '';

      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        const textChunk = c.text || '';
        accumulatedText += textChunk;
        
        setMessages(prev => prev.map(msg => 
          msg.id === botMsgId ? { ...msg, text: accumulatedText } : msg
        ));
      }
      setLoadingState(LoadingState.SUCCESS);

    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Désolé, je rencontre des difficultés techniques pour le moment. Veuillez réessayer plus tard."
      }]);
      setLoadingState(LoadingState.ERROR);
    }
  }, [inputText]);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Ouvrir le chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:w-96 h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <h3 className="font-semibold text-slate-100">Assistant Oisans IA</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/95">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-cyan-600' : 'bg-indigo-600'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`max-w-[80%] rounded-lg p-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-cyan-600/20 text-cyan-50 border border-cyan-600/30' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
               <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                 </div>
                 <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Posez une question..."
                className="w-full bg-slate-900 text-slate-100 rounded-lg pl-4 pr-12 py-3 text-sm border border-slate-700 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-slate-500"
              />
              <button
                type="submit"
                disabled={loadingState === LoadingState.LOADING || !inputText.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-400 hover:text-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;