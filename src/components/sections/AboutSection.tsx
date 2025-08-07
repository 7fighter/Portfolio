import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Code, Database, Server, Palette, Brain, Target } from 'lucide-react';
import Layout from '@/components/Layout';
import identityMaskImage from '@/assets/identity-mask.jpg';

const AboutSection = () => {
  const objectRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      category: 'Frontend Development',
      icon: Code,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
    },
    {
      category: 'Backend Development',
      icon: Server,
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs']
    },
    {
      category: 'Database Systems',
      icon: Database,
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      category: 'Design & UX',
      icon: Palette,
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX Design', 'Prototyping']
    }
  ];

  const achievements = [
    '3+ years of full-stack development experience',
    'Led development team of 5 members in university project',
    'Built 15+ responsive web applications',
    'Contributed to 3 open-source projects',
    'Mentored 10+ junior developers'
  ];

  useEffect(() => {
    const object = objectRef.current;
    const content = contentRef.current;
    const dust = dustRef.current;

    if (!object || !content || !dust) return;

    // Initial setup
    gsap.set(object, { y: -300, rotation: 10, opacity: 0 });
    gsap.set(content, { x: 100, opacity: 0 });
    gsap.set(dust, { opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline();

    // Drop animation with glow effect
    tl.to(object, {
      y: 0,
      rotation: 0,
      opacity: 1,
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

  const LeftColumnContent = () => (
    <div className="relative">
      <div
        ref={objectRef}
        className="w-48 h-48 flex items-center justify-center"
      >
        <img
          src={identityMaskImage}
          alt="Identity mask"
          className="w-full h-full object-contain filter drop-shadow-lg neon-glow"
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
          <h1 className="text-4xl font-bold text-accent mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Full-Stack Developer & Problem Solver
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="ops-card p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-muted border border-border flex items-center justify-center">
              <div className="text-6xl text-accent">S.A</div>
            </div>
            
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold text-card-foreground">
                Syed Muhammad Abbas
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in the MERN stack. 
                My journey in software development began during my university years, and 
                I've since built numerous web applications that solve real-world problems. 
                I believe in writing clean, efficient code and creating user experiences 
                that are both functional and beautiful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or planning my next chess move. 
                I'm always eager to take on new challenges and collaborate with 
                like-minded developers.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="ops-card p-6 group hover:neon-glow transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-accent text-accent-foreground p-2 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="ops-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent text-accent-foreground p-2">
              <Target size={20} />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">
              Key Achievements
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent"></div>
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="ops-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-accent text-accent-foreground p-2">
              <Brain size={20} />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground">
              Development Philosophy
            </h3>
          </div>
          
          <blockquote className="text-muted-foreground italic text-lg leading-relaxed border-l-4 border-accent pl-6">
            "Clean code is not written by following a set of rules. Clean code is written by 
            programmers who care about their craft. The key is to find a balance between 
            functionality, maintainability, and elegance. Every line of code should serve 
            a purpose, and every feature should solve a real problem."
          </blockquote>
        </div>
      </div>
    </Layout>
  );
};

export default AboutSection;