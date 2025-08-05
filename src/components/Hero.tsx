import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TypewriterEffect from './TypewriterEffect';
import SectionButton from './SectionButton';
import HackerSetup from './HackerSetup';

interface HeroProps {
  hasSeenIntro: boolean;
  setHasSeenIntro: (seen: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ hasSeenIntro, setHasSeenIntro }) => {
  const [showButtons, setShowButtons] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const navigate = useNavigate();

  const buttons = [
    { label: 'Projects', path: '/projects', icon: '<CODE/>' },
    { label: 'Education', path: '/education', icon: '[EDU]' },
    { label: 'Hobbies', path: '/hobbies', icon: '{FUN}' },
    { label: 'Contact', path: '/contact', icon: '@MSG' },
    { label: 'About', path: '/about', icon: '>>ME' },
  ];

  const handleTypingComplete = () => {
    setShowButtons(true);
    setHasSeenIntro(true);
  };

  const handleSetupComplete = () => {
    setShowTyping(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-hacker-bg">
      {hasSeenIntro ? (
        // Quick load for returning users
        <div className="min-h-screen flex items-center justify-center">
          <HackerSetup 
            skipAnimation={true} 
            showTyping={true}
            onSetupComplete={() => {}}
          />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-2xl md:text-4xl font-mono text-hacker-green glow-text">
                  Hey, my name is Syed Muhammad Abbas...
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {buttons.map((button, index) => (
                  <SectionButton
                    key={button.label}
                    label={button.label}
                    icon={button.icon}
                    onClick={() => navigate(button.path)}
                    delay={index * 0.05}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      ) : (
        // Full intro animation for first-time users
        <div className="min-h-screen flex items-center justify-center">
          <HackerSetup 
            skipAnimation={false} 
            showTyping={showTyping}
            onSetupComplete={handleSetupComplete}
          />
          
          {showTyping && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative z-10">
                <motion.div
                  className="text-center mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <TypewriterEffect
                    text="Hey, my name is Syed Muhammad Abbas..."
                    onComplete={handleTypingComplete}
                  />
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: showButtons ? 1 : 0, y: showButtons ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {buttons.map((button, index) => (
                    <SectionButton
                      key={button.label}
                      label={button.label}
                      icon={button.icon}
                      onClick={() => navigate(button.path)}
                      delay={index * 0.1}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* Matrix-style background particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-hacker-green/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;