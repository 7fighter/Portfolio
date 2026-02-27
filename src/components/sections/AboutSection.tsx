import { motion } from 'framer-motion';
import { Code, Database, Server, Palette, Brain, Target, Cpu, Shield } from 'lucide-react';
import Layout from '@/components/Layout';
// If identityMaskImage is causing issues, you can replace with a placeholder or local path
import identityMaskImage from '@/assets/identity-mask.jpg';
import { Variants } from 'framer-motion'; // Ensure this is imported

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
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs']
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
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    } 
  }
};

const itemVars: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const // Adding 'as const' fixes the Type error
    } 
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
        {/* --- HERO HEADER --- */}
        <motion.div variants={itemVars} className="relative pt-10">
          <span className="text-accent font-mono text-sm tracking-[0.5em] block mb-2 underline underline-offset-8 decoration-accent/30">
            &gt; CLASSIFIED_IDENTITY
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            THE_HUMAN <span className="text-outline-white text-white/10">CORE</span>
          </h1>
        </motion.div>

        {/* --- PERSONAL INTRO (Bento Style) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            variants={itemVars}
            className="md:col-span-8 bg-white/[0.02] border border-white/5 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
               <Cpu size={120} className="text-accent" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-accent">Syed Muhammad Abbas</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-2xl">
              <p>
                I'm a <span className="text-white font-medium">Full-Stack Architect</span> who obsesses over the MERN stack. I don't just write code; I build digital ecosystems that are scalable, efficient, and visually aggressive.
              </p>
              <p>
                My development philosophy is simple: <span className="italic">"If it works but feels slow, it's broken."</span> I bridge the gap between heavy backend logic and buttery-smooth frontend motion.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVars}
            className="md:col-span-4 bg-accent p-8 rounded-3xl flex flex-col justify-between text-black"
          >
            <div className="space-y-2">
                <Target size={40} />
                <h3 className="text-2xl font-black uppercase tracking-tight">Focus_Area</h3>
                <p className="font-mono text-xs font-bold">REACTIVE_SYSTEMS.v26</p>
            </div>
            <p className="text-sm font-medium leading-tight mt-10">
              Specializing in low-latency interfaces and complex state management.
            </p>
          </motion.div>
        </div>

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              variants={itemVars}
              whileHover={{ y: -5, borderColor: 'rgba(139, 92, 246, 0.5)' }}
              className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl transition-colors"
            >
              <skill.icon className={`mb-4 ${skill.color}`} size={24} />
              <h3 className="text-sm font-mono font-bold mb-4 uppercase tracking-widest">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded uppercase font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ACHIEVEMENTS & PHILOSOPHY --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <motion.div variants={itemVars} className="p-8 border-l-2 border-accent bg-white/[0.01]">
              <h3 className="flex items-center gap-2 text-xl font-bold mb-6 italic uppercase">
                <Shield size={20} className="text-accent" /> Performance_Metrics
              </h3>
              <ul className="space-y-4 font-mono text-xs text-muted-foreground">
                <li className="flex gap-4"><span className="text-accent">[01]</span> 3+ Years Experience</li>
                <li className="flex gap-4"><span className="text-accent">[02]</span> 15+ Responsive Systems Deployed</li>
                <li className="flex gap-4"><span className="text-accent">[03]</span> Open-Source Contributor</li>
                <li className="flex gap-4"><span className="text-accent">[04]</span> Team Leadership (5 Members)</li>
              </ul>
           </motion.div>

           <motion.div variants={itemVars} className="p-8 bg-white/[0.03] rounded-3xl relative overflow-hidden">
              <Brain className="absolute -bottom-10 -right-10 text-white opacity-5" size={200} />
              <p className="text-lg italic text-muted-foreground leading-relaxed relative z-10">
                "Clean code is not written by following a set of rules. Clean code is written by 
                programmers who care about their craft. Every line should serve a purpose."
              </p>
              <p className="mt-4 font-mono text-accent text-sm">— SYSTEM_MANIFESTO</p>
           </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default AboutSection;