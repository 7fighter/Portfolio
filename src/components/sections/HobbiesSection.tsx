import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Camera, Trophy, Crown, Gamepad2 } from 'lucide-react';
import Layout from '@/components/Layout';
import hobbiesImage from '@/assets/hobbies.jpg';

const HobbiesSection = () => {
  const objectRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);

  const hobbies = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Passionate about capturing moments and landscapes. Specialized in portrait and street photography.',
      skills: ['Portrait Photography', 'Street Photography', 'Photo Editing', 'Lightroom']
    },
    {
      icon: Trophy,
      title: 'Badminton',
      description: 'Competitive badminton player with tournament experience. Regular practice and coaching.',
      skills: ['Singles Play', 'Doubles Strategy', 'Competitive Tournaments', 'Coaching']
    },
    {
      icon: Crown,
      title: 'Chess',
      description: 'Strategic thinking through chess. Enjoy analyzing games and solving tactical puzzles.',
      skills: ['Strategic Planning', 'Tactical Analysis', 'Opening Theory', 'Endgame Study']
    },
    {
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Video game enthusiast with focus on strategy and puzzle games. Game development interest.',
      skills: ['Strategy Games', 'Problem Solving', 'Game Analysis', 'Community Building']
    }
  ];

  useEffect(() => {
    const content = contentRef.current;
    const item1 = item1Ref.current;
    const item2 = item2Ref.current;
    const item3 = item3Ref.current;

    if (!content || !item1 || !item2 || !item3) return;

    // Initial setup
    gsap.set([item1, item2, item3], { 
      y: -300, 
      rotation: Math.random() * 30 - 15,
      opacity: 0 
    });
    gsap.set(content, { x: 100, opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline();

    // Drop items sequentially
    tl.to(item1, {
      y: 0,
      rotation: Math.random() * 10 - 5,
      opacity: 1,
      duration: 0.8,
      ease: "bounce.out"
    })
    .to(item2, {
      y: 20,
      rotation: Math.random() * 10 - 5,
      opacity: 1,
      duration: 0.8,
      ease: "bounce.out"
    }, "-=0.5")
    .to(item3, {
      y: 40,
      rotation: Math.random() * 10 - 5,
      opacity: 1,
      duration: 0.8,
      ease: "bounce.out"
    }, "-=0.5")
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
    <div className="relative w-48 h-48 flex items-center justify-center">
      {/* Camera */}
      <div ref={item1Ref} className="absolute w-16 h-16 top-4 left-8">
        <div className="w-full h-full bg-secondary border border-border flex items-center justify-center">
          <Camera className="text-accent" size={24} />
        </div>
      </div>
      
      {/* Badminton Shuttle */}
      <div ref={item2Ref} className="absolute w-12 h-16 top-16 right-8">
        <div className="w-full h-full bg-secondary border border-border flex items-center justify-center">
          <Trophy className="text-accent" size={20} />
        </div>
      </div>
      
      {/* Chess Piece */}
      <div ref={item3Ref} className="absolute w-14 h-18 bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-full h-full bg-secondary border border-border flex items-center justify-center">
          <Crown className="text-accent" size={22} />
        </div>
      </div>
    </div>
  );

  return (
    <Layout leftColumnContent={<LeftColumnContent />}>
      <div ref={contentRef} className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">Hobbies & Interests</h1>
          <p className="text-lg text-muted-foreground">
            Activities that inspire creativity and strategic thinking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <div key={index} className="ops-card p-6 group hover:neon-glow transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground p-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {hobby.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {hobby.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {hobby.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="ops-card p-6 mt-8">
          <h3 className="text-xl font-semibold text-accent mb-4">Why These Hobbies Matter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Creative Expression</h4>
              <p>Photography allows me to express creativity and attention to detail, skills that translate directly to UI/UX design and front-end development.</p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Strategic Thinking</h4>
              <p>Chess and badminton develop strategic planning, quick decision-making, and the ability to adapt under pressure - essential for problem-solving in development.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HobbiesSection;