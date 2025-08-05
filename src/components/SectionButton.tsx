import React from 'react';
import { motion } from 'framer-motion';

interface SectionButtonProps {
  label: string;
  icon: string;
  onClick: () => void;
  delay?: number;
}

const SectionButton: React.FC<SectionButtonProps> = ({ label, icon, onClick, delay = 0 }) => {
  return (
    <motion.button
      className="bg-hacker-surface/50 backdrop-blur-md border border-hacker-green/30 rounded-lg p-4 hover:bg-hacker-green/10 hover:border-hacker-green hover:shadow-neon-green transition-all duration-300 group neon-border"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-lg font-mono text-hacker-green mb-2 group-hover:scale-110 transition-transform duration-300 glow-text">
        {icon}
      </div>
      <div className="text-sm font-mono text-gray-300 group-hover:text-hacker-green transition-colors duration-300">
        {label}
      </div>
    </motion.button>
  );
};

export default SectionButton;