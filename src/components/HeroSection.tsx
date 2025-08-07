import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import heroImage from '@/assets/hero-hacker.jpg';

interface HeroSectionProps {
  onComplete: () => void;
}

const HeroSection = ({ onComplete }: HeroSectionProps) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const monitorRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  const fullText = [
    'Hey, my name is',
    'Syed Muhammad Abbas...',
    'Welcome to my portfolio.'
  ];

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const monitor = monitorRef.current;
    const terminal = terminalRef.current;
    const buttons = buttonsRef.current;

    if (!container || !image || !monitor || !terminal || !buttons) return;

    // Initial setup
    gsap.set(monitor, { opacity: 0, scale: 0 });
    gsap.set(terminal, { opacity: 0 });
    gsap.set(buttons, { opacity: 0, y: 20 });

    // Main timeline
    const tl = gsap.timeline();

    // Camera zoom effect
    tl.to(image, {
      scale: 2.5,
      duration: 3,
      ease: "power2.inOut"
    })
    // Show monitor overlay
    .to(monitor, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=1")
    // Show terminal
    .to(terminal, {
      opacity: 1,
      duration: 0.5
    })
    // Start typing animation
    .call(() => {
      startTypingAnimation();
    });

    return () => {
      tl.kill();
    };
  }, []);

  const startTypingAnimation = () => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = '';

    const typeCharacter = () => {
      if (lineIndex >= fullText.length) {
        setShowCursor(false);
        // Show buttons after typing is complete
        gsap.to(buttonsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            setAnimationComplete(true);
            onComplete();
          }
        });
        return;
      }

      const line = fullText[lineIndex];
      
      if (charIndex < line.length) {
        currentLine += line[charIndex];
        setCurrentText(prev => {
          const lines = prev.split('\n');
          lines[lineIndex] = currentLine;
          return lines.join('\n');
        });
        charIndex++;
        setTimeout(typeCharacter, 50 + Math.random() * 50); // Realistic typing speed
      } else {
        // Move to next line
        lineIndex++;
        charIndex = 0;
        currentLine = '';
        setCurrentText(prev => prev + '\n');
        setTimeout(typeCharacter, 500); // Pause between lines
      }
    };

    typeCharacter();

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  };

  const handleNavigation = (section: string) => {
    navigate(`/${section}`);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 bg-background overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Hooded figure at computer"
          className="w-full h-full object-cover"
          style={{ transformOrigin: 'center center' }}
        />
      </div>

      {/* Monitor Overlay */}
      <div
        ref={monitorRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[400px] bg-muted border-2 border-border relative">
          {/* Terminal Window */}
          <div
            ref={terminalRef}
            className="terminal w-full h-full p-8 flex flex-col justify-center"
          >
            <div className="text-xl font-mono text-terminal-green leading-relaxed">
              {currentText.split('\n').map((line, index) => (
                <div key={index} className="min-h-[1.5rem]">
                  {line}
                  {index === currentText.split('\n').length - 1 && showCursor && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-wrap gap-4 mt-8 justify-center opacity-0"
            >
              {[
                { label: 'Projects', path: 'projects' },
                { label: 'Education', path: 'education' },
                { label: 'Hobbies', path: 'hobbies' },
                { label: 'About', path: 'about' },
                { label: 'Contact', path: 'contact' }
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="ops-button text-sm hover:neon-glow transition-all duration-300"
                  disabled={!animationComplete}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;