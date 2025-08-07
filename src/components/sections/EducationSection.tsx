import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Calendar, MapPin, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import booksImage from '@/assets/books.jpg';

const EducationSection = () => {
  const objectRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const book1Ref = useRef<HTMLDivElement>(null);
  const book2Ref = useRef<HTMLDivElement>(null);
  const book3Ref = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      location: 'Lahore, Pakistan',
      period: '2019 - 2023',
      grade: 'CGPA: 3.8/4.0',
      description: 'Specialized in Software Engineering and Database Systems. Active member of the Computer Science Society.'
    },
    {
      degree: 'Intermediate in Computer Science',
      institution: 'Government College',
      location: 'Lahore, Pakistan',
      period: '2017 - 2019',
      grade: 'Marks: 85%',
      description: 'Focused on mathematics, physics, and computer fundamentals. Participated in various programming competitions.'
    },
    {
      degree: 'Matriculation in Science',
      institution: 'Al-Huda School',
      location: 'Lahore, Pakistan',
      period: '2015 - 2017',
      grade: 'Marks: 92%',
      description: 'Strong foundation in mathematics and sciences. Class representative and academic excellence award recipient.'
    }
  ];

  useEffect(() => {
    const content = contentRef.current;
    const book1 = book1Ref.current;
    const book2 = book2Ref.current;
    const book3 = book3Ref.current;

    if (!content || !book1 || !book2 || !book3) return;

    // Initial setup
    gsap.set([book1, book2, book3], { y: -400, rotation: Math.random() * 20 - 10 });
    gsap.set(content, { x: 100, opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline();

    // Drop books sequentially
    tl.to(book1, {
      y: 0,
      rotation: 0,
      duration: 0.8,
      ease: "bounce.out"
    })
    .to(book2, {
      y: -20, // Stack effect
      rotation: 0,
      duration: 0.8,
      ease: "bounce.out"
    }, "-=0.4")
    .to(book3, {
      y: -40, // Stack effect
      rotation: 0,
      duration: 0.8,
      ease: "bounce.out"
    }, "-=0.4")
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
    <div className="relative w-48 h-48 flex items-end justify-center">
      <div ref={book1Ref} className="absolute w-32 h-40">
        <img
          src={booksImage}
          alt="Stack of books"
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      </div>
      <div ref={book2Ref} className="absolute w-32 h-40">
        <img
          src={booksImage}
          alt="Stack of books"
          className="w-full h-full object-contain filter drop-shadow-lg opacity-80"
        />
      </div>
      <div ref={book3Ref} className="absolute w-32 h-40">
        <img
          src={booksImage}
          alt="Stack of books"
          className="w-full h-full object-contain filter drop-shadow-lg opacity-60"
        />
      </div>
    </div>
  );

  return (
    <Layout leftColumnContent={<LeftColumnContent />}>
      <div ref={contentRef} className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">Education</h1>
          <p className="text-lg text-muted-foreground">
            My academic journey and qualifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block neon-glow"></div>
                
                <div className="md:ml-12 ops-card p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-accent mb-2">
                        {edu.degree}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-card-foreground">
                          <Award size={16} className="text-accent" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {edu.description}
                      </p>
                    </div>
                    
                    <div className="bg-secondary px-4 py-2 border border-border lg:ml-4">
                      <span className="text-secondary-foreground font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EducationSection;