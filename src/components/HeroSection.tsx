import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import heroImage from '@/assets/hero-hacker.jpg';

interface HeroSectionProps {
  onComplete: () => void;
}

const HeroSection = ({ onComplete }: HeroSectionProps) => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);
  const [isBooted, setIsBooted] = useState(false);
  const [glitchText, setGlitchText] = useState("INITIALIZING");

  // Keyboard shortcut listener for ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup: remove listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  // Modern "Scrambler" effect
  const scramble = (finalText: string) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iteration = 0;
    const interval = setInterval(() => {
      setGlitchText(prev => 
        finalText.split("").map((letter, index) => {
          if (index < iteration) return finalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= finalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsBooted(true);
        scramble("SYSTEM_ACTIVE");
      }
    });

    tl.fromTo(imageRef.current, 
      { scale: 1.5, filter: 'brightness(2) contrast(2)' },
      { scale: 1, filter: 'brightness(0.4) contrast(1.1)', duration: 1, ease: "expo.out" }
    );

    setTimeout(() => scramble("DECRYPTING_BIO"), 300);
  }, []);

  const navItems = [
    { label: 'PROJECTS', path: 'projects' },
    { label: 'IDENTITY', path: 'about' },
    { label: 'CONTACT', path: 'contact' },
  ];

  return (
    <div className="fixed inset-0 bg-black overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={heroImage}
          className="w-full h-full object-cover grayscale opacity-50"
          alt="hero"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl px-10">
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase">
              {glitchText}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic text-white"
          >
            ABBAS <br />
            <span className="text-outline-white text-transparent">STUDIO</span>
          </motion.h1>

          <div className="mt-12 flex flex-wrap gap-4">
            <AnimatePresence>
              {isBooted && navItems.map((item, i) => (
                <motion.button
                  key={item.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => navigate(`/${item.path}`)}
                  className="group relative border border-white/20 px-8 py-3 bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                  <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-white group-hover:text-black transition-colors">
                    {item.label}
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <button 
        onClick={onComplete}
        className="absolute bottom-10 right-10 font-mono text-[10px] text-white/30 hover:text-accent tracking-widest transition-colors uppercase"
      >
        Skip_Sequence // ESC
      </button>
    </div>
  );
};

export default HeroSection;