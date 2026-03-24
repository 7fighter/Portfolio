import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Radio, Globe, ShieldCheck, Cpu, Activity, Zap, BarChart3,Linkedin,Instagram } from 'lucide-react';
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
  <div className="flex flex-wrap items-center gap-6 mb-8">
    {/* Status Indicator */}
    <div className="flex items-center gap-4">
      <div className="h-[1px] w-12 bg-accent/50" />
      <span className="text-xs font-mono tracking-[0.4em] text-accent uppercase flex items-center gap-2 font-bold">
        <Radio size={14} className="animate-pulse" /> Uplink_Active
      </span>
    </div>


  </div>

  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-10">
    REACH <br />
<span className="text-outline-white text-white/10 italic break-all md:break-normal">
  OUT
</span>    </h1>

  <div className="flex flex-col md:flex-row md:items-end gap-8">
    <p className="max-w-md text-zinc-400 font-mono text-sm uppercase leading-relaxed tracking-wider opacity-80">
      Initiate connection for architecture, systems engineering, or full-stack deployment requests.
    </p>
    
   {/* Social Nodes - Responsive & Kinetic */}
<div className="flex items-center gap-1 md:gap-4 border-l border-white/10 pl-4 md:pl-8 mt-6 md:mt-0">
  {[
    { icon: Linkedin, href: "https://www.linkedin.com/in/syed-abbss-aa3b8b253/", label: "LINKEDIN" },
    { icon: Instagram, href: "https://www.instagram.com/abbas._.haider_?igsh=MXd0MHdzeGgxenNpaA==", label: "INSTA" }
  ].map((social, index) => (
    <motion.a
      key={index}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 md:p-4 flex items-center gap-3 rounded-2xl transition-colors hover:bg-white/[0.02]"
      whileTap={{ scale: 0.92 }} // Tactile feedback for mobile
      initial="rest"
      whileHover="hover"
    >
      {/* Background Glow - Subtle on mobile, vibrant on hover */}
      <motion.div 
        variants={{
          rest: { opacity: 0, scale: 0.8 },
          hover: { opacity: 0.1, scale: 1.2 }
        }}
        className="absolute inset-0 bg-accent rounded-xl blur-lg pointer-events-none"
      />

      {/* Icon Container */}
      <div className="relative">
        <social.icon className="size-5 md:size-6 text-zinc-500 group-hover:text-accent transition-colors duration-300" />
        
        {/* Constant Pulse Ring (Mobile "Alive" Indicator) */}
        <span className="absolute inset-0 rounded-full border border-accent/30 animate-ping opacity-20 md:group-hover:opacity-100" />
      </div>

      {/* Label - Responsive visibility */}
      <div className="flex flex-col">
        <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors">
          {social.label}
        </span>
        {/* Mobile-only status line */}
        <span className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
      </div>

      
    </motion.a>
  ))}
</div>
  </div>
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
      // Reduced padding on small mobile (p-3) vs tablet (md:p-6)
      className="flex items-center gap-3 md:gap-5 p-3 sm:p-4 md:p-6 border border-white/5 rounded-[1.2rem] md:rounded-[2rem] group transition-all bg-zinc-950/40 backdrop-blur-sm overflow-hidden"
    >
      {/* Icon Container: Scaled down slightly for mobile */}
      <div className="flex-shrink-0 p-2.5 md:p-4 bg-zinc-900 border border-white/10 text-zinc-400 group-hover:text-accent group-hover:border-accent/40 rounded-lg md:rounded-2xl transition-all">
        <contact.icon size={16} className="md:size-5" />
      </div>

      {/* Content Container */}
<div className="min-w-0 flex-1 overflow-hidden">
  <p className="text-[8px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-0.5 truncate">
    {contact.label}
  </p>
  <p className="
    text-[13px] sm:text-base md:text-lg 
    font-bold text-zinc-200 
    group-hover:text-white 
    transition-colors 
    tracking-tight 
    /* The Fix: truncate prevents wrapping and adds '...' */
    truncate
    /* Optional: helps the eye see there is more text */
    max-w-full
  ">
    {contact.value}
  </p>
</div>
    </motion.a>
  ))}
</div>
</div>

          {/* LIVE SYSTEM MONITOR DASHBOARD - RESPONSIVE & ENHANCED */}
<div className="p-6 md:p-10 bg-zinc-950/80 border border-white/5 rounded-[2rem] md:rounded-[3rem] space-y-6 md:space-y-8 relative overflow-hidden backdrop-blur-md">
  {/* Top Scanning Line */}
  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse" />
  
  {/* Dashboard Header */}
  <div className="flex justify-between items-start">
    <div className="flex flex-col gap-1">
      <span className="text-accent flex items-center gap-2 text-[10px] md:text-xs ">
        <div className="relative flex items-center justify-center">
          <Activity size={14} className="animate-pulse relative z-10" />
          <div className="absolute inset-0 bg-accent/20 blur-sm rounded-full animate-ping" />
        </div>
        SYSTEM_STATS
      </span>
      <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-1.5">
        <span className="size-1 bg-accent rounded-full animate-pulse" /> 
        Live_Telemetry
      </span>
    </div>
    
    <div className="text-right">
      <span className="block text-zinc-500 italic text-[9px] md:text-[10px] font-mono tracking-tighter">
        v2.0.26_<span className="text-accent/60">STABLE</span>
      </span>
    </div>
  </div>
  
  {/* Stats Grid */}
  <div className="space-y-6 md:space-y-7">
    {[
      { label: 'Latency', val: '94%', icon: Zap },
      { label: 'Security', val: '95%', icon: ShieldCheck },
      { label: 'Uptime', val: '99.9%', icon: Globe }
    ].map((s, i) => (
      <div key={i} className="group space-y-3">
        <div className="flex justify-between text-[10px] md:text-[11px] font-mono text-zinc-400 uppercase tracking-widest transition-colors group-hover:text-zinc-200">
          <span className="flex items-center gap-2">
            <s.icon size={13} className="text-accent/70 group-hover:text-accent transition-colors" /> 
            {s.label}
          </span>
          <span className="font-bold tabular-nums text-white/90">{s.val}</span>
        </div>
        
        <div className="relative h-[3px] md:h-1 bg-white/5 rounded-full overflow-hidden">
          {/* Main Progress Bar */}
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: s.val }} 
            transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }} 
            className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_12px_rgba(0,255,171,0.4)] z-10" 
          />
          
          {/* Animated "Scan" Shimmer */}
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.5, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
          />
        </div>
      </div>
    ))}
  </div>

  {/* Background Decoration for Depth */}
  <div className="absolute -bottom-10 -left-10 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
    <BarChart3 size={150} />
  </div>
</div>

            {/* CTA ACCENT CARD */}
            {/* <div className="p-10 bg-accent text-black rounded-[3rem] relative overflow-hidden group cursor-pointer shadow-xl active:scale-[0.97] transition-all">
              <BarChart3 className="absolute -bottom-4 -right-4 size-40 opacity-10 -rotate-12 group-hover:rotate-0 transition-all duration-1000" />
              <h4 className="font-black text-4xl uppercase leading-[0.85] mb-3 italic tracking-tighter">Launch <br /> Project</h4>
              <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Avg_Uplink: 12 Hours</p>
            </div> */}
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