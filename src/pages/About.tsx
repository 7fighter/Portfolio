import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Zap, Heart } from 'lucide-react';
import DroppingObject from '../components/DroppingObject';
import DustEffect from '../components/DustEffect';
import BackButton from '../components/BackButton';

const About: React.FC = () => {
  const [showDust, setShowDust] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const skills = [
    { name: "Frontend Development", icon: Code, level: 95 },
    { name: "Backend Development", icon: Database, level: 90 },
    { name: "Mobile Development", icon: Smartphone, level: 85 },
    { name: "Web Design", icon: Globe, level: 88 },
    { name: "DevOps", icon: Zap, level: 82 },
    { name: "Problem Solving", icon: Heart, level: 96 }
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
        <span className="text-8xl">🎭</span>
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
            About Me
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Avatar and Bio */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </motion.div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Syed Muhammad Abbas</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Passionate Full-Stack Developer with 4+ years of experience in creating 
                  innovative web solutions. I specialize in the MERN stack and have a deep 
                  love for crafting user-centric applications that solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or capturing the world through 
                  my camera lens. I believe in continuous learning and staying ahead 
                  of the technology curve.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My mission is to bridge the gap between complex technical solutions 
                  and intuitive user experiences, creating digital products that make 
                  a positive impact on people's lives.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Technical Skills</h2>
              
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(34, 211, 238, 0.3)' }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="ml-auto text-sm text-purple-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div
            className="mt-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">My Philosophy</h2>
            <motion.p
              className="text-xl text-gray-300 leading-relaxed italic"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              "Code is poetry written in logic. Every line should serve a purpose, 
              every function should tell a story, and every application should make 
              the world a little bit better."
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;