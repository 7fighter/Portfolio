import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import DroppingObject from '../components/DroppingObject';
import DustEffect from '../components/DustEffect';
import BackButton from '../components/BackButton';

const Education: React.FC = () => {
  const [showDust, setShowDust] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Karachi, Pakistan",
      period: "2019 - 2023",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "Outstanding Student Award in Software Engineering",
        "Lead Developer in University's Tech Society"
      ]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Government College",
      location: "Karachi, Pakistan",
      period: "2017 - 2019",
      gpa: "92%",
      achievements: [
        "Top 5% in Computer Science",
        "Mathematics Olympiad Regional Winner",
        "Science Fair First Prize"
      ]
    },
    {
      degree: "Secondary School Certificate",
      institution: "Model High School",
      location: "Karachi, Pakistan",
      period: "2015 - 2017",
      gpa: "95%",
      achievements: [
        "School Valedictorian",
        "Best Student in Science",
        "Inter-school Debate Champion"
      ]
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
        <div className="flex flex-col items-center">
          <span className="text-8xl">📚</span>
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
            Education Journey
          </motion.h1>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                {/* Timeline Line */}
                {index < education.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-cyan-400 to-purple-400"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GraduationCap className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                    whileHover={{ y: -3, scale: 1.01 }}
                  >
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg text-purple-300 mb-3">{edu.institution}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full">
                        GPA: {edu.gpa}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 flex items-start space-x-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Education;