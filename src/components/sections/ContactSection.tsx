import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Radio, Globe, ShieldCheck, Cpu, Activity, Zap, BarChart3, Terminal } from 'lucide-react';
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
      <motion.div initial="hidden" animate="visible" variants={containerVars} className="max-w-7xl mx-auto px-4 py-20">
        
        {/* --- CINEMATIC HEADER --- */}
        <section className="mb-24 relative overflow-hidden">
          <motion.div variants={itemVars} className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.5em] text-accent uppercase flex items-center gap-2">
                <Radio size={12} className="animate-pulse" /> Uplink_Active
              </span>
            </div>
            <h1 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] mb-8">
              REACH <br />
              <span className="text-white/5 italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>OUT</span>
            </h1>
            <p className="max-w-md text-zinc-500 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em]">
              Initiate connection for architecture, systems engineering, or full-stack deployment requests.
            </p>
          </motion.div>
          <div className="absolute -top-10 -right-20 opacity-[0.03] pointer-events-none hidden lg:block">
            <Cpu size={500} strokeWidth={0.5} className="text-accent" />
          </div>
        </section>

        {/* --- MAIN INTERFACE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: STICKY SIDEBAR (Follows scroll on laptop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <div className="space-y-3">
              <h3 className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em] px-2">Access_Nodes</h3>
              {contactInfo.map((contact, i) => (
                <motion.a key={i} href={contact.href} whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="flex items-center gap-4 p-4 border border-white/5 rounded-2xl group transition-all">
                  <div className="p-3 bg-zinc-950 border border-white/10 text-zinc-500 group-hover:text-accent group-hover:border-accent/30 rounded-xl transition-all">
                    <contact.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[8px] font-mono text-zinc-600 uppercase">{contact.label}</p>
                    <p className="text-sm font-bold text-zinc-300">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* LIVE SYSTEM MONITOR DASHBOARD */}
            <div className="p-8 bg-[#070707] border border-white/5 rounded-[2.5rem] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-accent flex items-center gap-2"><Activity size={10} className="animate-pulse" /> SYSTEM_OS</span>
                <span className="text-zinc-600 tracking-tighter italic text-[8px]">v2.0.26_STABLE</span>
              </div>
              <div className="space-y-5">
                {[
                  { label: 'Latency', val: '95%', icon: Zap },
                  { label: 'Security', val: '100%', icon: ShieldCheck },
                  { label: 'Uptime', val: '99.9%', icon: Globe }
                ].map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase">
                      <span className="flex items-center gap-1.5"><s.icon size={10} /> {s.label}</span>
                      <span>{s.val}</span>
                    </div>
                    <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: s.val }} transition={{ duration: 1.5, delay: i * 0.2 }} className="h-full bg-accent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA ACCENT CARD */}
            <div className="p-8 bg-accent text-black rounded-[2.5rem] relative overflow-hidden group cursor-pointer">
              <BarChart3 className="absolute -bottom-6 -right-6 size-32 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <h4 className="font-black text-2xl uppercase leading-none mb-2 italic">Launch <br /> Project</h4>
              <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">Avg_Uplink: 12 Hours</p>

            </div>
            {/* hide this cpu for the mobile screen and make it center allign */}
              <div className="hidden md:flex h-52 w-52 border border-white/10 rounded-full items-center justify-center animate-spin-slow">
                <Cpu size={90} className="text-white/10" />
              </div>
          </aside>

          {/* RIGHT: SCROLLING REVIEWS */}
          <div className="lg:col-span-8 bg-white/[0.01] border border-white/5 rounded-[3rem] p-6 md:p-12">
            
            
            {/* INJECTED COMPONENT */}
            <TestimonialSystem />

          </div>
        </div>
      </motion.div>

      <style>{`
        .animate-spin-slow { animation: spin 12s linear infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes scan { 
          0% { top: 0%; opacity: 0; } 
          50% { opacity: 1; } 
          100% { top: 100%; opacity: 0; } 
        }
      `}</style>
    </Layout>
  );
};

export default ContactSection;