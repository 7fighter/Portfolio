import { motion, Variants } from 'framer-motion';
import { Code, Database, Server, Palette, Brain, Target, Cpu, Shield, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';

const AboutSection = () => {
  const skills = [
    {
      category: 'Frontend_Core',
      icon: Code,
      color: 'text-blue-400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion']
    },
    {
      category: 'Backend_Architecture',
      icon: Server,
      color: 'text-purple-400',
      technologies: ['Node.js', 'Express', 'JavaScript', 'MERN', 'RESTful APIs']
    },
    {
      category: 'Database_Systems',
      icon: Database,
      color: 'text-green-400',
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase']
    },
    {
      category: 'Design_UX',
      icon: Palette,
      color: 'text-pink-400',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Responsive Systems']
    }
  ];

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 25 } 
    }
  };

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVars}
        className="max-w-6xl mx-auto space-y-12 pb-24 px-6 relative"
      >
        {/* --- DECORATIVE BACKGROUND BLOB --- */}
        <div className="absolute top-0 -left-20 w-72 h-72 bg-accent/10 blur-[120px] rounded-full -z-10 animate-pulse" />

        {/* --- HERO HEADER --- */}
        <motion.div variants={itemVars} className="relative pt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-12 bg-accent/50" />
            <span className="text-accent font-mono text-[10px] tracking-[0.5em] uppercase">
              Classified_Identity
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            THE_HUMAN <br />
            <span className="text-outline-white text-white/5 italic">CORE</span>
          </h1>
        </motion.div>

        {/* --- BENTO INTRO --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            variants={itemVars}
            className="md:col-span-8 bg-white/[0.03] border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
               <Cpu size={280} className="text-white" />
            </div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                  I build <span className="text-accent">digital ecosystems</span> that move.
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  <p>
                    I'm <span className="text-white font-semibold">Syed Muhammad Abbas</span>, a Full-Stack Architect specialized in the Next.js. I bridge the gap between heavy backend logic and buttery-smooth frontend motion.
                  </p>
                  <p className="text-base opacity-80">
                    My philosophy is rooted in performance. If a system is slow, it is fundamentally broken. I craft interfaces that don't just work—they feel alive.
                  </p>
                </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVars}
            className="md:col-span-4 bg-accent p-10 rounded-[2.5rem] flex flex-col justify-between text-black group relative overflow-hidden"
          >
            <div className="space-y-2">
                <Target size={40} />
                <h3 className="text-2xl font-black uppercase tracking-tight">Focus_Area</h3>
                <p className="font-mono text-xs font-bold">REACTIVE_SYSTEMS.v26</p>
            </div>
            <p className="text-sm font-bold leading-tight mt-12 relative z-10">
              Specializing in low-latency interfaces and complex global state management.
            </p>
          </motion.div>
        </div>

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {skills.map((skill, idx) => (
    <motion.div
      key={idx}
      variants={itemVars}
      whileHover={{ y: -10 }}
      className="relative group bg-white/[0.01] border border-white/5 p-8 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-white/[0.03]"
    >
      {/* --- ARTISTIC BACKGROUND ELEMENTS --- */}
      {/* Animated Gradient Glow */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-700`} />
      
      {/* Subtle Cyber Grid Pattern (Shows on hover) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-500" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} 
      />

      {/* --- CONTENT --- */}
      <div className="relative z-10">
        {/* Modern Icon Aperture */}
        <div className="relative w-fit mb-8">
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
          <div className={`relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-accent/50 transition-colors duration-500`}>
            <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform duration-500`} size={28} />
          </div>
        </div>

        {/* Header with Scanning Line */}
        <div className="mb-6">
          <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-accent transition-colors duration-300">
            {skill.category}
          </h3>
          <div className="h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-accent/50 to-transparent transition-all duration-700 mt-1" />
        </div>

        {/* High-Tech Skill Tags */}
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, techIdx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="text-[9px] px-3 py-1.5 bg-white/[0.02] border border-white/10 rounded-lg uppercase font-mono tracking-tighter text-muted-foreground hover:text-white hover:border-white/20 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Corner Decorative Bracket */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="w-4 h-4 border-r border-b border-accent/40 rounded-br-lg" />
      </div>
    </motion.div>
  ))}
</div>

        {/* --- METRICS & MANIFESTO --- */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* --- SYSTEM METRICS CARD --- */}
  <motion.div 
    variants={itemVars} 
    className="p-10 border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2.5rem] relative overflow-hidden group hover:border-accent/30 transition-colors duration-500"
  >
    {/* Animated Scanning Beam */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />
    <div className="absolute top-0 left-0 w-[1px] h-full bg-accent/40 opacity-50" />

    <h3 className="flex items-center gap-3 text-xl font-black uppercase tracking-tighter mb-10">
      <div className="p-2 bg-accent/10 rounded-lg">
        <Shield size={18} className="text-accent animate-pulse" />
      </div>
      System_Metrics
    </h3>

    <ul className="space-y-8 relative z-10">
      {[
        { label: 'Experience', value: '3+ Years', width: 'w-[85%]' },
        { label: 'Deployments', value: '15+ Systems', width: 'w-[95%]' },
        { label: 'Contribution', value: 'Open_Source', width: 'w-[70%]' },
        { label: 'Leadership', value: '5_Member_Team', width: 'w-[60%]' },
      ].map((item, idx) => (
        <li key={idx} className="group/item">
          <div className="flex justify-between items-center font-mono text-[10px] tracking-[0.2em] uppercase mb-2">
            <span className="text-muted-foreground group-hover/item:text-accent transition-colors">{item.label}</span>
            <span className="text-white font-bold">{item.value}</span>
          </div>
          {/* Subtle Progress Bar */}
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: item.width.split('[')[1].split(']')[0] }}
              transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
              className="h-full bg-gradient-to-r from-accent/60 to-accent" 
            />
          </div>
        </li>
      ))}
    </ul>
  </motion.div>

  {/* --- PHILOSOPHY / MANIFESTO CARD --- */}
  <motion.div 
    variants={itemVars} 
    className="p-10 bg-white/[0.03] border border-white/5 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-500"
  >
    {/* Artistic Watermark */}
    <Brain 
      className="absolute -bottom-12 -right-12 text-accent opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-1000" 
      size={320} 
      strokeWidth={0.5}
    />
    
    <div className="relative z-10">
      {/* Visual Quote Mark */}
      <div className="text-6xl font-serif text-accent/20 absolute -top-8 -left-4 select-none">“</div>
      
      <p className="text-2xl md:text-3xl font-medium tracking-tight text-white/90 leading-[1.4] italic font-serif">
        Clean code is not written by following a set of rules. It is written by 
        programmers who <span className="text-accent not-italic font-black underline underline-offset-8 decoration-white/10">care</span> about their craft.
      </p>

      <div className="mt-10 flex items-center gap-4">
        <div className="h-[1px] w-12 bg-accent/50" />
        <p className="font-mono text-accent text-[10px] tracking-[0.4em] uppercase">
          System_Manifesto
        </p>
      </div>
    </div>

    {/* Decorative corner dots */}
    <div className="absolute top-6 right-6 grid grid-cols-2 gap-1 opacity-20">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-white rounded-full" />
      ))}
    </div>
  </motion.div>
</div>
      </motion.div>
    </Layout>
  );
};

export default AboutSection;