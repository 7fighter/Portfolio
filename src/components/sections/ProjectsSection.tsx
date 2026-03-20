import { motion, Variants } from 'framer-motion';
import { Copy, Github, Terminal, Layers, Globe } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';
import Layout from '@/components/Layout';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Digital Campus System',
      id: 'PRJ-001',
      description: 'Full-stack academic infrastructure withtask synchronization using Convex for zero-latency collaboration and student management.',
      techStack: ['Next.js', 'Clerk', 'Convex', 'Stripe'],
      githubUrl: 'https://github.com/7fighter/apna-campus',
      liveUrl: 'https://apna-campus-bofk.vercel.app/'
    },
    {
      title: 'Real-time Dentist Lab',
      id: 'PRJ-002',
      description: 'Industrial-grade Dentist website integrated secure payment gateways and Better auth for authenticated access.',
      techStack: ['React', 'Better Auth', 'Supabase', 'Stripe'],
      githubUrl: 'https://github.com/7fighter/dentist-web-App',
      liveUrl: 'https://sb-ka-dentist.netlify.app/'
    },
    {
      title: 'Habit Flow',
      id: 'PRJ-003',
      description: 'Build in collaboration wiht the team include Advanced data visualization',
      techStack: ['TypeScript', 'Vite', 'Framer Motion', 'Framer motion'],
      githubUrl: 'https://github.com/maaz-n/flowbit',
      liveUrl: 'https://flowbit-three.vercel.app/'
    }
  ];

  // Snappier container: Reduced stagger for faster reveal
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.08, 
        delayChildren: 0.05 
      } 
    }
  };

  // Snappier items: Using spring physics instead of duration-based eases
  const itemVars: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        mass: 0.8
      } 
    }
  };

  const handleCopyGithub = () => {
    toast.success('DATA_LINKED: GitHub URL copied');
  };

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        whileInView="visible" // Only animates when in viewport for better performance
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVars}
        className="max-w-6xl mx-auto pb-24 px-6 md:px-12"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVars} className="mb-16 pt-10">
          <div className="flex items-center gap-3 text-accent font-mono text-[10px] tracking-[0.5em] mb-4 opacity-80">
            <Terminal size={14} /> // DEPLOYMENT_ARCHIVE
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            SELECTED <br />
            <span className="text-outline-white text-white/5 italic">WORKS</span>
          </h1>
        </motion.div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVars}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/5 p-8 rounded-[2rem] hover:bg-white/[0.04] hover:border-white/10 transition-colors duration-200"
            >
              {/* ID Badge */}
              <div className="absolute top-8 right-8 font-mono text-[10px] text-muted-foreground opacity-30 group-hover:text-accent group-hover:opacity-100 transition-all">
                {project.id}
              </div>

              {/* LEFT: Project Info */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-accent/80 hover:bg-accent/10 transition-colors"
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
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-accent text-black font-bold uppercase text-sm rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
                >
                  Launch Live Demo <Globe size={18} />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-xs font-mono"
                  >
                    <Github size={16} /> REPO
                  </a>
                  
                 <CopyToClipboard text={project.githubUrl} onCopy={handleCopyGithub}>
  <button className="w-full flex items-center justify-center gap-2 p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all text-[10px] md:text-xs font-mono group">
    {/* flex-shrink-0 ensures the icon stays its intended size */}
    <Copy size={16} className="flex-shrink-0 group-hover:text-accent transition-colors" /> 
    
    {/* whitespace-nowrap prevents the text from wrapping awkwardly, 
        while truncate handles extreme edge cases */}
    <span className="whitespace-nowrap truncate">
      COPY_LINK
    </span>
  </button>
</CopyToClipboard>
                </div>
              </div>

              {/* Decorative Accent Line - Faster transition */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-1/2 bg-accent transition-all duration-300 ease-out rounded-r-full" />
            </motion.div>
          ))}
        </div>

        {/* --- DYNAMIC FOOTER --- */}
        <motion.div variants={itemVars} className="mt-20 flex flex-col items-center justify-center space-y-4">
            <div className="h-px w-24 bg-white/10" />
            <p className="text-muted-foreground font-mono text-[10px] tracking-[0.5em] uppercase opacity-50">
              End_of_Archive
            </p>
            <Layers className="text-accent/10" size={40} />
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default ProjectsSection;