import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Code, GraduationCap, Target, Phone, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: Code, label: 'Projects' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/hobbies', icon: Target, label: 'Hobbies' },
    { path: '/contact', icon: Phone, label: 'Contact' },
    { path: '/about', icon: User, label: 'About' },
  ];

  return (
    <motion.nav
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 bg-hacker-surface/80 backdrop-blur-xl border border-hacker-green/20 rounded-xl p-4"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`p-3 rounded-lg transition-all duration-300 group relative ${
                isActive 
                  ? 'bg-hacker-green/20 text-hacker-green shadow-neon-green' 
                  : 'hover:bg-hacker-green/10 text-gray-400 hover:text-hacker-green'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="w-5 h-5" />
              
              {/* Tooltip */}
              <motion.div
                className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-hacker-surface border border-hacker-green/30 rounded-lg px-3 py-1 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                {item.label}
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;