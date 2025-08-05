import React from 'react';
import { motion } from 'framer-motion';

interface DroppingObjectProps {
  children: React.ReactNode;
  onAnimationComplete?: () => void;
}

const DroppingObject: React.FC<DroppingObjectProps> = ({ children, onAnimationComplete }) => {
  return (
    <motion.div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl z-10"
      initial={{ y: -100, rotateZ: 0 }}
      animate={{ 
        y: [0, 400, 350], 
        rotateZ: [0, 180, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        duration: 1.5, 
        times: [0, 0.8, 1],
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  );
};

export default DroppingObject;