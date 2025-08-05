import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterEffectProps {
  text: string;
  onComplete?: () => void;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      setTimeout(onComplete, 1000);
    }
  }, [currentIndex, text, onComplete]);

  return (
    <div className="text-2xl md:text-4xl font-mono text-hacker-green glow-text">
      {displayText}
      <motion.span
        className="inline-block w-1 h-8 md:h-12 bg-hacker-green ml-1 shadow-neon-green"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </div>
  );
};

export default TypewriterEffect;