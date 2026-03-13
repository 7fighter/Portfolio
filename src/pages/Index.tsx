import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';

// --- DATA STRUCTURE FOR FUTURE BACKEND ---
const PAGE_CONTENT = {
  name: { first: "Syed", last: "Abbas" },
  role: "Full-Stack Developer",
  specialization: "Next.js, MERN architecture and aggressive UI/UX",
  navigation: [
    { label: 'Selected_Projects', path: 'projects', count: '04' },
    { label: 'Technical_Background', path: 'education', count: '02' },
    { label: 'Core_Identity', path: 'about', count: '01' }
  ],
  stack: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Express'],
  metrics: {
    availability: "OPEN_TO_WORK",
    timezone: "PKT (UTC +5)",
    optimization: 85
  }
};

const Index = () => {
  const navigate = useNavigate();
  const [showHero, setShowHero] = useState(false);
  const [heroComplete, setHeroComplete] = useState(false);
  
  // Real-time Clock for that "System Active" feel
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    const hasVisited = localStorage.getItem('portfolio_visited');
    
    if (!hasVisited) {
      setShowHero(true);
      localStorage.setItem('portfolio_visited', 'true');
    } else {
      setHeroComplete(true);
    }
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  if (showHero && !heroComplete) {
    return <HeroSection onComplete={() => setHeroComplete(true)} />;
  }

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative grid grid-cols-12 gap-4 pt-12 md:pt-24"
      >
        {/* --- LEFT SIDE: IDENTITY & NAVIGATION --- */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <div className="flex items-center gap-4 text-accent font-mono text-sm tracking-[0.3em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              SYSTEM_ACTIVE // {time}
            </div>
            
            <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase italic">
              {PAGE_CONTENT.name.first} <br /> 
             <span className="pr-4 text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-blue-500">
  {PAGE_CONTENT.name.last}
</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-xl">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              {PAGE_CONTENT.role} crafting <span className="text-white font-medium">high-performance</span> digital systems. 
              Specialized in {PAGE_CONTENT.specialization}.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 pt-10">
            {PAGE_CONTENT.navigation.map((item) => (
              <div 
                key={item.path}
                onClick={() => navigate(`/${item.path}`)}
                className="group flex items-end gap-4 cursor-pointer border-b border-white/5 pb-4 hover:border-accent transition-colors duration-500"
              >
                <span className="text-accent font-mono text-xs mb-2">{item.count}</span>
                <span className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-all duration-500">
                  {item.label}
                </span>
                <span className="ml-auto text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all">→</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: SYSTEM METRICS --- */}
        <div className="hidden lg:block lg:col-span-4 self-start sticky top-24 space-y-6">
          {/* Tech Stack Module */}
          <motion.div variants={itemVariants} className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-2xl">
            <h3 className="text-[10px] font-mono text-accent mb-4 uppercase tracking-[0.2em] border-b border-accent/20 pb-2">
              Current_Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {PAGE_CONTENT.stack.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono hover:bg-accent hover:text-black transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Metrics Module */}
          <motion.div variants={itemVariants} className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-2xl">
            <h3 className="text-[10px] font-mono text-accent mb-4 uppercase tracking-[0.2em] border-b border-accent/20 pb-2">
              Live_Metrics
            </h3>
            <div className="space-y-4 font-mono">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-muted-foreground uppercase">Availability</span>
                <span className="text-green-400 animate-pulse">{PAGE_CONTENT.metrics.availability}</span>
              </div>
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-muted-foreground uppercase">Timezone</span>
                <span>{PAGE_CONTENT.metrics.timezone}</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-4">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${PAGE_CONTENT.metrics.optimization}%` }}
                  transition={{ duration: 2, ease: "circOut" }}
                  className="h-full bg-gradient-to-r from-accent to-blue-500"
                />
              </div>
              <p className="text-[9px] text-muted-foreground text-center uppercase tracking-tighter">
                System Optimization {PAGE_CONTENT.metrics.optimization}%
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Index;