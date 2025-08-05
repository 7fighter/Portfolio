import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';
import About from './pages/About';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-hacker-bg dark:bg-hacker-bg light:bg-gray-100 text-white dark:text-white light:text-gray-900 transition-colors duration-300">
          <ThemeToggle />
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Hero hasSeenIntro={hasSeenIntro} setHasSeenIntro={setHasSeenIntro} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;