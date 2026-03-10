import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Radio, Globe, ShieldCheck, Cpu, Activity, Zap, BarChart3 } from 'lucide-react';
import Layout from '@/components/Layout';
import TestimonialSystem from './TestimonialSystem';

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVars: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'PROTOCOL: EMAIL', value: 'abbas.dev@email.com', href: 'mailto:abbas.dev@email.com' },
    { icon: Phone, label: 'VOICE: ENCRYPTED', value: '+92 300 1234567', href: 'tel:+923001234567' },
    { icon: MapPin, label: 'NODE: LOCATION', value: 'Lahore, Pakistan', href: '#' }
  ];

  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={containerVars} className="max-w-7xl mx-auto px-4 py-20 antialiased">
        
        {/* --- CINEMATIC HEADER --- */}
        <section className="mb-24 relative overflow-hidden">
          <motion.div variants={itemVars} className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-[11px] font-mono tracking-[0.5em] text-accent uppercase flex items-center gap-2 font-bold">
                <Radio size={14} className="animate-pulse" /> Uplink_Active
              </span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              REACH <br />
              <span className="text-white/5 italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>OUT</span>
            </h1>
            <p className="max-w-md text-zinc-400 font-mono text-xs uppercase leading-relaxed tracking-[0.15em]">
              Initiate connection for architecture, systems engineering, or full-stack deployment requests.
            </p>
          </motion.div>
          <div className="absolute -top-10 -right-20 opacity-[0.03] pointer-events-none hidden lg:block">
            <Cpu size={500} strokeWidth={0.5} className="text-accent" />
          </div>
          
        </section>

        {/* --- MAIN INTERFACE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: STICKY SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <div className="space-y-3">
              <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.4em] px-2 font-bold">Access_Nodes</h3>
              {contactInfo.map((contact, i) => (
                <motion.a key={i} href={contact.href} whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="flex items-center gap-5 p-5 border border-white/10 rounded-2xl group transition-all bg-zinc-950/50">
                  <div className="p-3 bg-zinc-900 border border-white/10 text-zinc-400 group-hover:text-accent group-hover:border-accent/40 rounded-xl transition-all shadow-sm">
                    <contact.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{contact.label}</p>
                    <p className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* LIVE SYSTEM MONITOR DASHBOARD */}
            <div className="p-8 bg-zinc-950 border border-white/10 rounded-[2.5rem] space-y-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <div className="flex justify-between items-center">
                <span className="text-accent flex items-center gap-2 text-[11px] font-mono font-bold">
                  <Activity size={12} className="animate-pulse" /> SYSTEM_OS
                </span>
                <span className="text-zinc-600 tracking-tighter italic text-[10px] font-mono">v2.0.26_STABLE</span>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: 'Latency', val: '95%', icon: Zap },
                  { label: 'Security', val: '100%', icon: ShieldCheck },
                  { label: 'Uptime', val: '99.9%', icon: Globe }
                ].map((s, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wide">
                      <span className="flex items-center gap-2"><s.icon size={12} className="text-accent" /> {s.label}</span>
                      <span className="font-bold">{s.val}</span>
                    </div>
                    <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: s.val }} transition={{ duration: 1.5, delay: i * 0.2 }} className="h-full bg-accent shadow-[0_0_8px_#00FFAB]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA ACCENT CARD */}
            <div className="p-8 bg-accent text-black rounded-[2.5rem] relative overflow-hidden group cursor-pointer shadow-lg active:scale-[0.98] transition-transform">
              <BarChart3 className="absolute -bottom-6 -right-6 size-32 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <h4 className="font-black text-3xl uppercase leading-[0.9] mb-2 italic">Launch <br /> Project</h4>
              <p className="text-[11px] font-bold uppercase tracking-widest opacity-70">Avg_Uplink: 12 Hours</p>
            </div>

            {/* CENTERED CPU ROTATOR (Desktop Only) */}
            {/* <div className="hidden md:flex justify-center pt-8">
              <div className="h-48 w-48 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow relative">
                <div className="absolute inset-0 rounded-full border border-accent/5 animate-pulse" />
                <Cpu size={80} className="text-white/5" strokeWidth={1} />
              </div>
            </div> */}
          </aside>

          {/* RIGHT: SCROLLING REVIEWS */}
          <div className="lg:col-span-8 bg-white/[0.01] border border-white/5 rounded-[3rem] p-6 md:p-10 shadow-inner">
            <TestimonialSystem />
          </div>
        </div>
      </motion.div>

      <style>{`
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </Layout>
  );
};

export default ContactSection;