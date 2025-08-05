import React from 'react';
import { motion } from 'framer-motion';

interface DustEffectProps {
  show: boolean;
}

const DustEffect: React.FC<DustEffectProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="absolute top-96 left-1/2 transform -translate-x-1/2">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/60 rounded-full"
          style={{
            left: `${(Math.random() - 0.5) * 200}px`,
            top: `${(Math.random() - 0.5) * 50}px`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [1, 0.8, 0],
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100
          }}
          transition={{ 
            duration: 1,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default DustEffect;