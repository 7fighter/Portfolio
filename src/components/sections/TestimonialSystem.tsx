import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Send, Star, Terminal, ChevronRight, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVars: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

const INITIAL_TESTIMONIALS = [
  { id: 1, name: 'Sarah Johnson', company: 'Tech Solutions Inc.', message: 'Abbas delivered an exceptional e-commerce platform. His technical expertise is outstanding.', rating: 5 },
  { id: 2, name: 'Michael Chen', company: 'Digital Innovations', message: 'High-quality, maintainable code and clear communication throughout the project.', rating: 4 },
  { id: 3, name: 'Elena Rodriguez', company: 'Nexus Stream', message: 'The attention to detail in the UI/UX implementation exceeded our expectations.', rating: 5 }
];

const TestimonialSystem = () => {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [form, setForm] = useState({ name: '', company: '', message: '', rating: 5 });
  const [hoverRating, setHoverRating] = useState(0);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [lastSubmittedId, setLastSubmittedId] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    setTimeout(() => {
      const newEntry = { ...form, id: Date.now() };
      setTestimonials(prev => [newEntry, ...prev]);
      setLastSubmittedId(newEntry.id);
      setIsTransmitting(false);
      toast.success('DATA_LOGGED: Transmission successful.');
      setForm({ name: '', company: '', message: '', rating: 5 });
    }, 1500);
  };

  const marqueeItems = useMemo(() => [...testimonials, ...testimonials, ...testimonials], [testimonials]);

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVars} className="space-y-16">
      <style>{`
        @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
      `}</style>

      {/* --- FORM SECTION --- */}
      <motion.div variants={itemVars} className="relative">
        <div className={`relative bg-zinc-950 border transition-all duration-500 p-8 rounded-[2rem] ${isTransmitting ? 'border-accent shadow-[0_0_40px_rgba(0,255,171,0.1)]' : 'border-white/5'}`}>
          <AnimatePresence>
            {isTransmitting && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2rem] z-50">
                <div className="absolute w-full h-1 bg-accent shadow-[0_0_20px_#00FFAB]" style={{ animation: 'scan 2s linear infinite' }} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tighter uppercase italic flex items-center gap-3">
              Submit Intel <Terminal size={16} className="text-accent" />
            </h2>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-10 relative z-10 ${isTransmitting ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Identify_User Input */}
              <div className="relative">
                <input 
                  type="text" required placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-accent transition-colors text-xs" 
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} 
                />
                <label className="absolute left-0 top-2 text-zinc-600 text-[8px] font-mono uppercase tracking-widest transition-all 
                  peer-placeholder-shown:top-2 peer-placeholder-shown:text-zinc-600 
                  peer-focus:-top-4 peer-focus:text-accent 
                  peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-accent">
                  Identify_User
                </label>
              </div>

              {/* Entity_ID Input */}
              <div className="relative">
                <input 
                  type="text" required placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-accent transition-colors text-xs" 
                  value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} 
                />
                <label className="absolute left-0 top-2 text-zinc-600 text-[8px] font-mono uppercase tracking-widest transition-all 
                  peer-placeholder-shown:top-2 peer-placeholder-shown:text-zinc-600 
                  peer-focus:-top-4 peer-focus:text-accent 
                  peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-accent">
                  Entity_ID
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea 
                required rows={2} placeholder=" "
                className="peer w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-accent transition-colors text-xs resize-none" 
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} 
              />
              <label className="absolute left-0 top-2 text-zinc-600 text-[8px] font-mono uppercase tracking-widest transition-all 
                peer-placeholder-shown:top-2 peer-placeholder-shown:text-zinc-600 
                peer-focus:-top-4 peer-focus:text-accent 
                peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-accent">
                Transmission_Data
              </label>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <span className="text-[8px] font-mono text-zinc-500 uppercase">Rank:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} onClick={() => setForm({ ...form, rating: s })} onMouseEnter={() => setHoverRating(s)} onMouseLeave={() => setHoverRating(0)} className={`cursor-pointer transition-all ${s <= (hoverRating || form.rating) ? 'fill-accent text-accent scale-110' : 'text-white/10'}`} />
                  ))}
                </div>
              </div>
              <button type="submit" disabled={isTransmitting} className="w-full sm:w-auto px-10 py-4 bg-accent text-black font-black uppercase tracking-widest rounded-xl text-[10px] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,255,171,0.4)] transition-all">
                {isTransmitting ? 'ENCRYPTING...' : 'EXECUTE_LOG'} <Send size={10} />
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* --- LOGS FEED --- */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">Decrypted_Logs</h3>
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>

        <div className="relative flex overflow-hidden group py-4">
          <motion.div className="flex gap-6" animate={{ x: ["0%", "-33.33%"] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }} whileHover={{ transition: { duration: 60 } }}>
            {marqueeItems.map((t, idx) => (
              <div key={`${t.id}-${idx}`} className="w-[320px] md:w-[400px] shrink-0">
                <ReviewCard t={t} lastSubmittedId={lastSubmittedId} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewCard = ({ t, lastSubmittedId }: { t: any, lastSubmittedId: number | null }) => (
  <div className={`group relative bg-zinc-900/40 border p-8 rounded-3xl transition-all duration-500 h-full flex flex-col 
    ${t.id === lastSubmittedId 
      ? 'border-accent bg-accent/5 shadow-[0_0_30px_rgba(0,255,171,0.1)]' 
      : 'border-white/5 hover:border-accent/40 hover:bg-accent/[0.02] hover:shadow-[0_0_30px_rgba(0,255,171,0.05)]'}`}>
    
    {t.id === lastSubmittedId && (
      <div className="absolute -top-3 left-6 flex items-center gap-2 px-3 py-1 bg-accent rounded-full z-20 shadow-[0_0_15px_#00FFAB]">
        <CheckCircle2 size={10} className="text-black" />
        <span className="text-[8px] font-black text-black uppercase">Verified</span>
      </div>
    )}

    <div className="flex gap-1.5 mb-6">
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 
          ${idx < t.rating ? 'bg-accent shadow-[0_0_8px_#00FFAB]' : 'bg-zinc-800'}`} />
      ))}
    </div>

    <div className="relative flex-grow">
      <MessageSquareQuote size={32} className="absolute -top-4 -left-2 text-white/5 group-hover:text-accent/10 transition-colors" />
      <p className="text-zinc-400 text-[13px] leading-relaxed mb-8 relative z-10 font-light italic group-hover:text-zinc-200 transition-colors">
        "{t.message}"
      </p>
    </div>

    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent font-mono text-xs shrink-0 group-hover:border-accent/30 transition-all">
        {t.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <h4 className="text-[11px] font-bold uppercase text-white tracking-wider flex items-center gap-2 group-hover:text-accent transition-colors">
          {t.name} <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
        </h4>
        <p className="text-[9px] font-mono text-zinc-600 uppercase truncate">
          {t.company}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialSystem;