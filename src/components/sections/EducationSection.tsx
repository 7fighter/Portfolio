import { motion, Variants } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, BookOpen, Star } from 'lucide-react';
import Layout from '@/components/Layout';

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Comsats University Isalamabad',
      location: 'Attock, Pakistan',
      period: '2024 - 2028',
      grade: 'CGPA: 3.8/4.0',
      description: 'The era of architecture. Specialized in Software Engineering and Database Systems. This phase defined my core logic and problem-solving framework.',
      tags: ['Software Engineering', 'Databases', 'Logic']
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Federal College Of Science & Commerce',
      location: 'Attock, Pakistan',
      period: '2019 - 2021',
      grade: 'Marks: 84%',
      description: 'The foundation of code. Transitioned from theory to practical implementation, focusing on mathematics and physics fundamentals.',
      tags: ['Mathematics', 'Physics', 'Fundamentals']
    },
    {
      degree: 'Matriculation in Science',
      institution: 'Jinnah Public School',
      location: 'Attock, Pakistan',
      period: '2017 - 2019',
      grade: 'Marks: 84%',
      description: 'The spark of curiosity. Strong foundation in sciences and academic excellence that paved the way for a technical future.',
      tags: ['Science', 'Academic Excellence']
    }
  ];

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3 } 
    }
  };

  const itemVars: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    }
  };

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="max-w-5xl mx-auto pb-24"
      >
        {/* --- HEADER: The Quest Log --- */}
        <motion.div variants={itemVars} className="mb-16 pt-10">
          <div className="flex items-center gap-2 text-accent font-mono text-xs tracking-widest mb-4">
            <GraduationCap size={16} /> 02 // ACADEMIC_HISTORY.log
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            KNOWLEDGE <br />
<span className="text-outline-white text-white/10 italic break-all md:break-normal">
  ACQUISITION
</span>          </h1>
        </motion.div>

        {/* --- STORYLINE TIMELINE --- */}
        <div className="relative space-y-20">
          {/* Central Vertical Line (The Path) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/5 to-transparent hidden md:block" />

          {education.map((edu, index) => (
            <motion.div 
              key={index}
              variants={itemVars}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* The Timeline Marker (The Data Point) */}
              <div className="absolute left-[-2px] md:left-1/2 md:ml-[-10px] top-0 w-[20px] h-[20px] bg-black border-2 border-accent rounded-full z-10 hidden md:block">
                <div className="w-full h-full animate-ping bg-accent/30 rounded-full" />
              </div>

              {/* Content Card (The Story Fragment) */}
              <div className={`w-full md:w-[45%] group`}>
                <div className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:border-accent/30 transition-all duration-500 backdrop-blur-xl relative overflow-hidden">
                  
                  {/* Floating Grade Badge */}
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 group-hover:text-accent transition-opacity font-mono text-sm">
                    {edu.grade}
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono mb-4">
                    LEVEL_0{education.length - index}
                  </span>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Award size={12} /> {edu.institution}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{edu.description}"
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map(tag => (
                      <span key={tag} className="text-[9px] border border-white/10 px-2 py-1 rounded-sm uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Visual (The Void Filler) */}
              <div className="hidden md:flex w-[45%] justify-center items-center opacity-20 group-hover:opacity-100 transition-opacity">
                 {index % 2 === 0 ? <BookOpen size={100} /> : <Star size={100} />}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SUMMARY FOOTER --- */}
        <motion.div 
          variants={itemVars}
          className="mt-32 p-12 border border-white/5 bg-gradient-to-br from-accent/5 to-transparent rounded-[40px] text-center"
        >
          <h3 className="text-2xl font-bold mb-4 uppercase italic">Current Status: Continuous Learner</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm leading-relaxed">
            Education is not the learning of facts, but the training of the mind to think. 
            I am currently expanding my knowledge in <span className="text-accent">Microservices</span> and <span className="text-accent">Advanced System Design</span>.
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default EducationSection;