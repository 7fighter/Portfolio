import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Send, Star, Terminal, ChevronRight, MessageSquareQuote, CheckCircle2, Lock } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/supabaseClient'; // Ensure this path is correct

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVars: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 120, damping: 20 } 
  }
};

const TestimonialSystem = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [form, setForm] = useState({ name: '', company: '', message: '', rating: 5 });
  const [hoverRating, setHoverRating] = useState(0);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);

  // 1. Check Auth & Fetch Existing Data
  useEffect(() => {
    const initialize = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) {
        setForm(prev => ({ ...prev, name: session.user.email?.split('@')[0] || '' }));
      }
      fetchTestimonials();
    };

    initialize();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error("DATABASE_ERROR: Could not sync logs.");
    } else {
      setTestimonials(data || []);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return navigate('/auth');

    setIsTransmitting(true);

    const { data, error } = await supabase
      .from('testimonials')
      .insert([
        { 
          name: form.name, 
          company: form.company, 
          message: form.message, 
          rating: form.rating,
          user_id: user.id 
        }
      ])
      .select();

    if (error) {
      toast.error(`TRANSMISSION_FAILED: ${error.message}`);
    } else {
      toast.success('DATA_LOGGED: Entry encrypted and stored.');
      setTestimonials(prev => [data[0], ...prev]);
      setLastSubmittedId(data[0].id);
      setForm({ name: user.email?.split('@')[0] || '', company: '', message: '', rating: 5 });
    }
    setIsTransmitting(false);
  };

  const marqueeItems = useMemo(() => {
    if (testimonials.length === 0) return [];
    // Ensure we have enough items to scroll smoothly
    return [...testimonials, ...testimonials, ...testimonials];
  }, [testimonials]);

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVars} className="space-y-16 antialiased">
      <style>{`
        @keyframes scan { 
          0% { transform: translateY(-100%); opacity: 0; } 
          50% { opacity: 1; }
          100% { transform: translateY(1000%); opacity: 0; } 
        }
      `}</style>

      {/* --- FORM SECTION --- */}
      <motion.div variants={itemVars} className="relative">
        <div className={`relative bg-zinc-950 border transition-all duration-300 p-8 rounded-[1.5rem] ${isTransmitting ? 'border-accent shadow-[0_0_20px_rgba(0,255,171,0.15)]' : 'border-white/10'}`}>
          
          {/* GUEST OVERLAY */}
          {!user && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-[6px] rounded-[1.5rem] border border-white/5 p-6 text-center">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                <Lock className="text-accent" size={32} />
              </div>
              <h3 className="text-white font-mono text-[11px] tracking-[0.3em] uppercase mb-2">Access_Denied</h3>
              <p className="text-zinc-500 text-[10px] font-mono mb-6 max-w-[200px]">UPLINK REQUIRES VALID BIOMETRIC SIGNATURE</p>
              <button 
                onClick={() => navigate('/auth')}
                className="px-8 py-3 bg-accent text-black font-black text-[10px] tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all rounded-lg"
              >
                Initialize_Auth
              </button>
            </div>
          )}

          <AnimatePresence>
            {isTransmitting && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.5rem] z-50">
                <div className="absolute w-full h-[2px] bg-accent shadow-[0_0_10px_#00FFAB]" style={{ animation: 'scan 2s linear infinite' }} />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mb-8">
            <h2 className="text-xl font-bold tracking-tight uppercase italic flex items-center gap-3 text-white">
              Submit Intel <Terminal size={14} className="text-accent" />
            </h2>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-10 relative z-10 transition-all duration-300 ${isTransmitting || !user ? 'opacity-20 grayscale' : 'opacity-100'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input 
                  type="text" required placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-accent transition-colors text-[13px] text-white" 
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} 
                />
                <label className="absolute left-0 top-2 text-zinc-500 text-[9px] font-mono uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-accent">
                  _User_name
                </label>
              </div>

              <div className="relative">
                <input 
                  type="text" required placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-accent transition-colors text-[13px] text-white" 
                  value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} 
                />
                <label className="absolute left-0 top-2 text-zinc-500 text-[9px] font-mono uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-accent">
                  Email_ID
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea 
                required rows={2} placeholder=" "
                className="peer w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-accent transition-colors text-[13px] text-white resize-none" 
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} 
              />
              <label className="absolute left-0 top-2 text-zinc-500 text-[9px] font-mono uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-accent">
                Write_Review
              </label>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="text-[9px] font-mono text-zinc-400 uppercase">Rank:</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} onClick={() => setForm({ ...form, rating: s })} onMouseEnter={() => setHoverRating(s)} onMouseLeave={() => setHoverRating(0)} className={`cursor-pointer transition-transform active:scale-90 ${s <= (hoverRating || form.rating) ? 'fill-accent text-accent' : 'text-white/20'}`} />
                  ))}
                </div>
              </div>
              <button type="submit" disabled={isTransmitting || !user} className="w-full sm:w-auto px-10 py-4 bg-accent text-black font-bold uppercase tracking-[0.2em] rounded-lg text-[11px] flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_0_rgb(0,200,130)] disabled:opacity-50">
                {isTransmitting ? 'ENCRYPTING...' : 'EXECUTE_LOG'} <Send size={12} />
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* --- LOGS FEED --- */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">Decrypted_Reviews</h3>
          <div className="h-[1px] flex-grow bg-white/10" />
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20 font-mono text-[10px] text-accent animate-pulse">SYNCING_DATA_CORES...</div>
        ) : marqueeItems.length > 0 ? (
          <div className="relative flex overflow-hidden py-4">
            <motion.div 
              className="flex gap-6 will-change-transform" 
              animate={{ x: ["0%", "-33.33%"] }} 
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {marqueeItems.map((t, idx) => (
                <div key={`${t.id}-${idx}`} className="w-[320px] md:w-[420px] shrink-0">
                  <ReviewCard t={t} lastSubmittedId={lastSubmittedId} />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-20 font-mono text-[10px] text-zinc-600">NO_DATA_FOUND_IN_SECTOR</div>
        )}
      </div>
    </motion.div>
  );
};

const ReviewCard = ({ t, lastSubmittedId }: { t: any, lastSubmittedId: string | null }) => (
  <div className={`group relative bg-zinc-900/40 border p-8 rounded-[2rem] transition-all duration-500 h-full flex flex-col overflow-hidden
    ${t.id === lastSubmittedId 
      ? 'border-accent bg-accent/[0.03] shadow-[0_0_25px_rgba(0,255,171,0.1)]' 
      : 'border-white/10 hover:border-white/30 hover:bg-zinc-900/60'}`}>
    
    {t.id === lastSubmittedId && (
      <div className="absolute top-0 right-0">
        <div className="bg-accent text-black px-4 py-1.5 rounded-bl-2xl flex items-center gap-2 shadow-sm">
          <CheckCircle2 size={10} strokeWidth={3} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Verified_Entry</span>
        </div>
      </div>
    )}

    <div className="flex gap-2 mb-6">
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 
          ${idx < t.rating ? 'bg-accent shadow-[0_0_5px_#00FFAB]' : 'bg-zinc-800'}`} />
      ))}
    </div>

    <div className="relative flex-grow">
      <MessageSquareQuote size={28} className="absolute -top-2 -left-2 text-white/5" />
      <p className="text-zinc-300 text-[14px] leading-[1.6] mb-8 relative z-10 font-medium">
        {t.message}
      </p>
    </div>

    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
      <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent font-mono text-xs font-bold shrink-0">
        {t.name.charAt(0)}
      </div>
      <div className="min-w-0">
        <h4 className="text-[12px] font-bold uppercase text-white tracking-wide flex items-center gap-2">
          {t.name} <ChevronRight size={10} className="text-accent" />
        </h4>
        <p className="text-[10px] font-mono text-zinc-500 uppercase truncate">
          {t.company}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialSystem;