import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Copy, ExternalLink, Github } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import wrenchImage from '@/assets/wrench.jpg';

const ProjectsSection = () => {
  const objectRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with payment integration',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/syedabbas/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management System',
      description: 'Real-time collaborative task management with WebSocket',
      techStack: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/syedabbas/task-manager',
      liveUrl: 'https://taskmanager-demo.com'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard with weather API integration',
      techStack: ['React', 'D3.js', 'Express', 'Redis'],
      githubUrl: 'https://github.com/syedabbas/weather-dashboard',
      liveUrl: 'https://weather-analytics.com'
    }
  ];

  useEffect(() => {
    const object = objectRef.current;
    const content = contentRef.current;
    const dust = dustRef.current;

    if (!object || !content || !dust) return;

    // Initial setup
    gsap.set(object, { y: -300, rotation: 10 });
    gsap.set(content, { x: 100, opacity: 0 });
    gsap.set(dust, { opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline();

    // Drop animation
    tl.to(object, {
      y: 0,
      rotation: 0,
      duration: 1.2,
      ease: "bounce.out"
    })
    // Dust effect
    .to(dust, {
      opacity: 1,
      duration: 0.3
    }, "-=0.3")
    .to(dust, {
      opacity: 0,
      duration: 0.5
    }, "+=0.2")
    // Slide in content
    .to(content, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  const handleCopyGithub = (url: string) => {
    toast.success('GitHub URL copied to clipboard!');
  };

  const LeftColumnContent = () => (
    <div className="relative">
      <div
        ref={objectRef}
        className="w-48 h-48 flex items-center justify-center"
      >
        <img
          src={wrenchImage}
          alt="Wrench tool"
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      </div>
      {/* Dust particles */}
      <div
        ref={dustRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 opacity-0"
      >
        <div className="w-full h-full bg-dust-particle opacity-30 blur-sm rounded-full"></div>
      </div>
    </div>
  );

  return (
    <Layout leftColumnContent={<LeftColumnContent />}>
      <div ref={contentRef} className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my full-stack development work
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="ops-card p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <CopyToClipboard
                    text={project.githubUrl}
                    onCopy={() => handleCopyGithub(project.githubUrl)}
                  >
                    <button className="ops-button flex items-center gap-2">
                      <Copy size={16} />
                      <span className="hidden sm:inline">Copy GitHub</span>
                    </button>
                  </CopyToClipboard>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ops-button flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ops-button flex items-center gap-2"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsSection;