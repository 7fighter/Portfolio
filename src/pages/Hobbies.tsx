import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Zap, Target, Gamepad2, Music, BookOpen } from 'lucide-react';
import DroppingObject from '../components/DroppingObject';
import DustEffect from '../components/DustEffect';
import BackButton from '../components/BackButton';

const Hobbies: React.FC = () => {
  const [showDust, setShowDust] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const hobbies = [
    {
      name: "Photography",
      icon: Camera,
      description: "Capturing moments and exploring visual storytelling through street and portrait photography.",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Badminton",
      icon: Zap,
      description: "Competitive badminton player, participating in local tournaments and club matches.",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Chess",
      icon: Target,
      description: "Strategic thinking and problem-solving through classical and speed chess games.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Exploring virtual worlds and competitive gaming, especially strategy and FPS games.",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Music Production",
      icon: Music,
      description: "Creating electronic music and experimenting with sound design and audio engineering.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Reading",
      icon: BookOpen,
      description: "Continuous learning through tech blogs, science fiction novels, and philosophy books.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const handleObjectDrop = () => {
    setShowDust(true);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackButton />
      
      <DroppingObject onAnimationComplete={handleObjectDrop}>
        <div className="flex space-x-4">
          <span className="text-6xl">📸</span>
          <span className="text-6xl">🏸</span>
          <span className="text-6xl">♟️</span>
        </div>
      </DroppingObject>
      
      <DustEffect show={showDust} />

      {showContent && (
        <motion.div
          className="container mx-auto px-6 py-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Hobbies
          </motion.h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${hobby.color} flex items-center justify-center mb-4 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-center text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {hobby.name}
                  </h3>

                  <p className="text-gray-300 text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {hobby.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Fun Stats */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Fun Stats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { label: "Photos Taken", value: "5,000+" },
                { label: "Chess Games", value: "1,200+" },
                { label: "Books Read", value: "150+" },
                { label: "Songs Produced", value: "25+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Hobbies;