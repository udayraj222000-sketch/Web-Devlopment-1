import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import Markdown from 'react-markdown';

// @ts-ignore
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Welcome to Lumière. How may I assist you today with our luxury salon and spa services?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are an elegant, professional, and helpful concierge for Lumière, a luxury salon and spa.
          You assist clients with questions about services (Hair, Makeup, Skin, Bridal, Nails), pricing, and booking.
          Keep your responses concise, luxurious, and polite. Format your answers nicely using markdown if needed.`,
        }
      });
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const responseStream = await chatRef.current.sendMessageStream({ message: userMessage });
      
      let fullResponse = '';
      const modelMessageId = (Date.now() + 1).toString();
      
      setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          setMessages(prev => prev.map(msg => 
            msg.id === modelMessageId ? { ...msg, text: fullResponse } : msg
          ));
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: 'I apologize, but I am currently unable to process your request. Please try again later or contact our salon directly.' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-charcoal text-gold rounded-full shadow-2xl flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageCircle size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col border border-gray-100"
          >
            <div className="bg-charcoal text-warm-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-gold font-serif text-lg">L</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-none">Lumière Concierge</h3>
                  <span className="text-[10px] text-gold uppercase tracking-widest">Always at your service</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-warm-white/70 hover:text-warm-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-beige/10">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-charcoal text-white rounded-tr-sm' 
                        : 'bg-white border border-gray-100 text-charcoal shadow-sm rounded-tl-sm'
                    }`}
                  >
                    {msg.role === 'model' ? (
                      <div className="markdown-body prose prose-sm prose-p:leading-relaxed prose-a:text-gold max-w-none text-charcoal">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex space-x-2">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      className="w-2 h-2 bg-gold rounded-full"
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      className="w-2 h-2 bg-gold rounded-full"
                    />
                    <motion.div 
                      animate={{ y: [0, -5, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      className="w-2 h-2 bg-gold rounded-full"
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-beige/20 border-none rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-shadow text-charcoal"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 bg-gold text-charcoal rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold/90 transition-colors shrink-0"
                >
                  <Send size={18} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
