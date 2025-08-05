import React from 'react';
import { motion } from 'framer-motion';

interface HackerSetupProps {
  skipAnimation: boolean;
  showTyping: boolean;
  onSetupComplete: () => void;
}

const HackerSetup: React.FC<HackerSetupProps> = ({ skipAnimation, showTyping, onSetupComplete }) => {
  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center"
      initial={skipAnimation ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: skipAnimation ? 0 : 3, ease: "easeOut" }}
      onAnimationComplete={skipAnimation ? undefined : onSetupComplete}
    >
      {/* Room Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hacker-bg via-hacker-surface/20 to-hacker-bg" />
      
      {/* Hooded Figure */}
      <motion.div
        className="relative z-10"
        initial={skipAnimation ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: skipAnimation ? 0 : 2, delay: skipAnimation ? 0 : 1 }}
      >
        <svg
          width="800"
          height="600"
          viewBox="0 0 800 600"
          className="w-full h-auto max-w-4xl"
        >
          {/* Desk */}
          <rect x="100" y="450" width="600" height="20" fill="#2A2A2A" />
          <rect x="80" y="470" width="640" height="80" fill="#1A1A1A" />
          
          {/* Monitor */}
          <rect x="300" y="300" width="200" height="150" fill="#000000" stroke="#333" strokeWidth="3" />
          <rect x="310" y="310" width="180" height="130" fill="#0A0A0A" />
          
          {/* Monitor Screen Content */}
          {showTyping && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Screen glow */}
              <rect x="310" y="310" width="180" height="130" fill="url(#screenGlow)" />
              
              {/* Terminal lines */}
              <text x="320" y="330" fill="#00FFAB" fontSize="8" fontFamily="monospace">
                $ whoami
              </text>
              <text x="320" y="345" fill="#FFFFFF" fontSize="8" fontFamily="monospace">
                syed_muhammad_abbas
              </text>
              <text x="320" y="365" fill="#00FFAB" fontSize="8" fontFamily="monospace">
                $ cat intro.txt
              </text>
            </motion.g>
          )}
          
          {/* Monitor Stand */}
          <rect x="380" y="450" width="40" height="30" fill="#333" />
          <rect x="360" y="470" width="80" height="10" fill="#2A2A2A" />
          
          {/* Keyboard */}
          <rect x="320" y="480" width="160" height="40" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
          
          {/* Mouse */}
          <ellipse cx="520" cy="500" rx="15" ry="20" fill="#1A1A1A" stroke="#333" strokeWidth="1" />
          
          {/* Hooded Figure */}
          <g>
            {/* Body */}
            <ellipse cx="400" cy="380" rx="80" ry="100" fill="#0D0D0D" />
            
            {/* Hood */}
            <path d="M 320 280 Q 400 250 480 280 Q 480 320 400 340 Q 320 320 320 280" fill="#0A0A0A" />
            
            {/* Face (barely visible) */}
            <ellipse cx="400" cy="320" rx="25" ry="30" fill="#1A1A1A" opacity="0.8" />
            
            {/* Arms */}
            <ellipse cx="350" cy="400" rx="20" ry="60" fill="#0D0D0D" transform="rotate(-20 350 400)" />
            <ellipse cx="450" cy="400" rx="20" ry="60" fill="#0D0D0D" transform="rotate(20 450 400)" />
            
            {/* Hands on keyboard */}
            <ellipse cx="380" cy="480" rx="12" ry="8" fill="#2A2A2A" />
            <ellipse cx="420" cy="480" rx="12" ry="8" fill="#2A2A2A" />
          </g>
          
          {/* Ambient lighting */}
          <circle cx="400" cy="200" r="100" fill="url(#ambientGlow)" opacity="0.3" />
          
          {/* Definitions */}
          <defs>
            <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FFAB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00FFAB" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FFAB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00FFAB" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
      
      {/* Screen zoom effect overlay */}
      {showTyping && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ scale: 1 }}
          animate={{ scale: 2.5 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-48 h-32 bg-hacker-bg/90 border border-hacker-green/50 rounded-lg shadow-neon-green" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HackerSetup;