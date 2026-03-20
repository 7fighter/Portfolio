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
    { icon: Mail, label: 'PROTOCOL: EMAIL', value: 'abbassyed389@gmail.com', href: 'mailto:abbassyed389@gmail.com' },
    { icon: Phone, label: 'VOICE: ENCRYPTED', value: '+92 309 5027607', href: 'tel:+923095027607' },
    { icon: MapPin, label: 'NODE: LOCATION', value: 'Attock, Pakistan', href: '#' }
  ];

  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={containerVars} className="max-w-7xl mx-auto px-6 py-24 antialiased">
        
        {/* --- CINEMATIC HEADER --- */}
        <section className="mb-20 relative">
          <motion.div variants={itemVars} className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent/50" />
              <span className="text-xs font-mono tracking-[0.4em] text-accent uppercase flex items-center gap-2 font-bold">
                <Radio size={14} className="animate-pulse" /> Uplink_Active
              </span>
            </div>
            {/* Adjusted from 8rem to 7xl/9xl for better viewport fit */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-10">
              REACH <br />
              <span className="text-white/5 italic" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}>OUT</span>
            </h1>
            <p className="max-w-md text-zinc-400 font-mono text-sm uppercase leading-relaxed tracking-wider opacity-80">
              Initiate connection for architecture, systems engineering, or full-stack deployment requests.
            </p>
          </motion.div>
          <div className="absolute -top-20 -right-20 opacity-[0.02] pointer-events-none hidden lg:block">
            <Cpu size={560} strokeWidth={0.5} className="text-accent" />
          </div>
        </section>

        {/* --- MAIN INTERFACE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: STICKY SIDEBAR */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-10">
       <div className="space-y-4">
  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] px-2 font-bold opacity-60">
    Access_Nodes
  </h3>
  <div className="space-y-3">
    {contactInfo.map((contact, i) => (
      <motion.a 
        key={i} 
        href={contact.href} 
        whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.04)" }}
        className="flex items-center gap-4 md:gap-5 p-4 md:p-6 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] group transition-all bg-zinc-950/40 backdrop-blur-sm overflow-hidden"
      >
        {/* Prevent icon from shrinking when text gets long */}
        <div className="flex-shrink-0 p-3 md:p-4 bg-zinc-900 border border-white/10 text-zinc-400 group-hover:text-accent group-hover:border-accent/40 rounded-xl md:rounded-2xl transition-all">
          <contact.icon size={18} className="md:size-5" />
        </div>

        {/* min-w-0 allows the flex child to shrink properly */}
        <div className="min-w-0 flex-1">
          <p className="text-[9px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1 truncate">
            {contact.label}
          </p>
          <p className="text-sm sm:text-base md:text-lg font-bold text-zinc-200 group-hover:text-white transition-colors tracking-tight break-all sm:break-normal">
            {contact.value}
          </p>
        </div>
      </motion.a>
    ))}
  </div>
</div>

            {/* LIVE SYSTEM MONITOR DASHBOARD */}
            <div className="p-10 bg-zinc-950/80 border border-white/5 rounded-[3rem] space-y-8 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              <div className="flex justify-between items-center">
                <span className="text-accent flex items-center gap-2 text-xs font-mono font-black tracking-widest">
                  <Activity size={14} className="animate-pulse" /> SYSTEM_STATS
                </span>
                <span className="text-zinc-600 italic text-[10px] font-mono tracking-tighter">v2.0.26_STABLE</span>
              </div>
              
              <div className="space-y-7">
                {[
                  { label: 'Latency', val: '95%', icon: Zap },
                  { label: 'Security', val: '100%', icon: ShieldCheck },
                  { label: 'Uptime', val: '99.9%', icon: Globe }
                ].map((s, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2"><s.icon size={14} className="text-accent" /> {s.label}</span>
                      <span className="font-bold text-white">{s.val}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: s.val }} transition={{ duration: 1.5, delay: i * 0.2 }} className="h-full bg-accent shadow-[0_0_12px_rgba(0,255,171,0.4)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA ACCENT CARD */}
            <div className="p-10 bg-accent text-black rounded-[3rem] relative overflow-hidden group cursor-pointer shadow-xl active:scale-[0.97] transition-all">
              <BarChart3 className="absolute -bottom-4 -right-4 size-40 opacity-10 -rotate-12 group-hover:rotate-0 transition-all duration-1000" />
              <h4 className="font-black text-4xl uppercase leading-[0.85] mb-3 italic tracking-tighter">Launch <br /> Project</h4>
              <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Avg_Uplink: 12 Hours</p>
            </div>
          </aside>

          {/* RIGHT: SCROLLING REVIEWS */}
          <div className="lg:col-span-8 bg-white/[0.01] border border-white/5 rounded-[3.5rem] p-4 md:p-12">
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