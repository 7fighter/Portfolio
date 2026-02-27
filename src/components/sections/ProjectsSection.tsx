import { motion, Variants } from 'framer-motion';
import { Copy, ExternalLink, Github, Terminal, Layers, Globe } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';
import Layout from '@/components/Layout';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Digital Campus System',
      id: 'PRJ-001',
      description: 'Full-stack academic infrastructure with integrated secure payment gateways and student management.',
      techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/syedabbas/digital-campus',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      title: 'Real-time Collab Lab',
      id: 'PRJ-002',
      description: 'Industrial-grade task synchronization engine using WebSockets for zero-latency collaboration.',
      techStack: ['React', 'Socket.io', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/syedabbas/task-manager',
      liveUrl: 'https://taskmanager-demo.com'
    },
    {
      title: 'Weather Analytics Hub',
      id: 'PRJ-003',
      description: 'Advanced data visualization engine processing real-time meteorological API data with D3 rendering.',
      techStack: ['React', 'D3.js', 'Express', 'Redis'],
      githubUrl: 'https://github.com/syedabbas/weather-dashboard',
      liveUrl: 'https://weather-analytics.com'
    }
  ];

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" as const } 
    }
  };

  const handleCopyGithub = () => {
    toast.success('DATA_LINKED: GitHub URL copied to clipboard');
  };

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="max-w-6xl mx-auto pb-24"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVars} className="mb-16 pt-10">
          <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-[0.5em] mb-4">
            <Terminal size={14} /> // DEPLOYMENT_ARCHIVE
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            SELECTED <br />
            <span className="text-outline-white text-white/10 italic">WORKS</span>
          </h1>
        </motion.div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVars}
              whileHover={{ x: 10 }}
              className="relative group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* ID Badge */}
              <div className="absolute top-8 right-8 font-mono text-[10px] text-muted-foreground opacity-50 group-hover:text-accent group-hover:opacity-100">
                {project.id}
              </div>

              {/* LEFT: Project Info */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-accent/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT: Action Terminal */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-accent text-black font-bold uppercase text-sm rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  Launch Live Demo <Globe size={18} />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-xs font-mono"
                  >
                    <Github size={16} /> REPO
                  </a>
                  
                  <CopyToClipboard text={project.githubUrl} onCopy={handleCopyGithub}>
                    <button className="flex items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-xs font-mono">
                      <Copy size={16} /> COPY_LINK
                    </button>
                  </CopyToClipboard>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-2/3 bg-accent transition-all duration-500 rounded-r-full" />
            </motion.div>
          ))}
        </div>

        {/* --- DYNAMIC FOOTER --- */}
        <motion.div variants={itemVars} className="mt-20 flex flex-col items-center justify-center space-y-4">
            <div className="h-px w-24 bg-white/10" />
            <p className="text-muted-foreground font-mono text-[10px] tracking-[0.5em] uppercase">
              End_of_Archive
            </p>
            <Layers className="text-accent/20" size={40} />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ProjectsSection;