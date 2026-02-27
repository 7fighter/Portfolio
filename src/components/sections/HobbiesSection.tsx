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

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" as const } 
    }
  };

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="max-w-6xl mx-auto space-y-12 pb-20"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVars} className="relative pt-10">
          <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-[0.4em] mb-4">
            <Sparkles size={14} /> // OFF_DUTY_MODULE
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            EXTRASENSORY <br />
            <span className="text-outline-white text-white/10 italic">INTERESTS</span>
          </h1>
        </motion.div>

        {/* --- HOBBIES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              whileHover={{ y: -10, rotateZ: index % 2 === 0 ? -1 : 1 }}
              className="relative group bg-white/[0.03] border border-white/5 rounded-3xl p-8 overflow-hidden transition-colors hover:bg-white/[0.06] hover:border-accent/30"
            >
              {/* Background Icon Watermark */}
              <hobby.icon className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-accent/10 transition-colors" size={180} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-2xl text-accent">
                    <hobby.icon size={28} />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground border border-white/10 px-3 py-1 rounded-full group-hover:border-accent/50 group-hover:text-accent transition-colors">
                    {hobby.tag}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">{hobby.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                  {hobby.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {hobby.skills.map((skill) => (
                    <span key={skill} className="text-[9px] font-mono uppercase bg-white/5 px-2 py-1 rounded border border-white/10">
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
          className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-accent rounded-3xl p-8 text-black"
        >
          <div className="md:col-span-4 flex items-center gap-4">
            <Zap size={48} fill="currentColor" />
            <h3 className="text-2xl font-black leading-none uppercase">Why <br />It Matters</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2 border-l-2 border-black/20 pl-6">
              <h4 className="font-bold uppercase text-sm italic">Creative Sync</h4>
              <p className="text-xs font-medium leading-relaxed opacity-80">
                Visual arts like photography directly influence how I structure UI layouts and manage visual hierarchy in code.
              </p>
            </div>
            <div className="space-y-2 border-l-2 border-black/20 pl-6">
              <h4 className="font-bold uppercase text-sm italic">Neural Training</h4>
              <p className="text-xs font-medium leading-relaxed opacity-80">
                Chess and badminton keep my reaction time sharp and my ability to anticipate logic-paths refined.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default HobbiesSection;