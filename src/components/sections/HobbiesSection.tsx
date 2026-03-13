import { motion, Variants } from 'framer-motion';
import { Camera, Trophy, Crown, Gamepad2, Sparkles, Zap } from 'lucide-react';
import Layout from '@/components/Layout';

const HobbiesSection = () => {
  const hobbies = [
    {
      icon: Camera,
      title: 'Photography',
      tag: 'VISUALS',
      description: 'Capturing the world through a lens. Specialized in street photography and high-contrast portraits.',
      skills: ['Lightroom', 'Composition', 'Color Grading']
    },
    {
      icon: Trophy,
      title: 'Badminton',
      tag: 'REFLEX',
      description: 'Competitive play that demands high-speed decision making and physical agility.',
      skills: ['Singles', 'Doubles', 'Strategy']
    },
    {
      icon: Crown,
      title: 'Chess',
      tag: 'STRATEGY',
      description: 'Analyzing patterns and thinking 5 moves ahead. A workout for the logical mind.',
      skills: ['Tactics', 'Endgames', 'Analysis']
    },
    {
      icon: Gamepad2,
      title: 'Gaming',
      tag: 'INTERACTIVE',
      description: 'Exploring game mechanics and community building in competitive strategy titles.',
      skills: ['Teamwork', 'Mechanics', 'Troubleshooting']
    }
  ];

  // Faster Stagger: 0.08s for a "popcorn" reveal effect
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
    }
  };

  // Snappy Spring: Higher stiffness, lower damping for immediate arrival
  const itemVars: Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 25 } 
    }
  };

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        whileInView="visible" // Performance: Only animate when scrolling into view
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVars}
        className="max-w-6xl mx-auto space-y-12 pb-20 px-6"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVars} className="relative pt-10">
          <div className="flex items-center gap-3 text-accent font-mono text-[10px] tracking-[0.5em] mb-4 opacity-70">
            <Sparkles size={14} /> // OFF_DUTY_MODULE
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            EXTRASENSORY <br />
            <span className="text-outline-white text-white/5 italic">INTERESTS</span>
          </h1>
        </motion.div>

        {/* --- HOBBIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="relative group bg-white/[0.02] border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-200 hover:bg-white/[0.05] hover:border-accent/40"
            >
              {/* Background Icon Watermark: Faster color transition */}
              <hobby.icon className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-accent/10 transition-all duration-300 group-hover:scale-110" size={180} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-accent/5 border border-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <hobby.icon size={24} />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground border border-white/10 px-3 py-1 rounded-full group-hover:border-accent/50 group-hover:text-accent transition-colors">
                    {hobby.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-3 uppercase tracking-tight group-hover:text-accent transition-colors">
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs opacity-80 group-hover:opacity-100 transition-opacity">
                  {hobby.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {hobby.skills.map((skill) => (
                    <span key={skill} className="text-[9px] font-mono uppercase bg-white/5 px-2 py-1 rounded border border-white/10 tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PHILOSOPHY FOOTER --- */}
        <motion.div 
          variants={itemVars}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-accent rounded-3xl p-8 text-black relative overflow-hidden group shadow-[0_0_30px_rgba(var(--accent-rgb),0.1)]"
        >
          {/* Subtle glow effect for the footer */}
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none" />

          <div className="md:col-span-4 flex items-center gap-4 relative z-10">
            <Zap size={40} fill="currentColor" />
            <h3 className="text-2xl font-black leading-tight uppercase italic">The<br />Catalyst</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-2 border-l-2 border-black/10 pl-6">
              <h4 className="font-bold uppercase text-xs tracking-tighter italic">Creative Sync</h4>
              <p className="text-[11px] font-medium leading-relaxed opacity-70">
                Visual arts influence my UI architecture and spatial hierarchy in design systems.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-black/10 pl-6">
              <h4 className="font-bold uppercase text-xs tracking-tighter italic">Neural Training</h4>
              <p className="text-[11px] font-medium leading-relaxed opacity-70">
                Chess and sports refine reaction speeds and multi-path logic anticipation.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default HobbiesSection;