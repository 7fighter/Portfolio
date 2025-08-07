import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';

const Index = () => {
  const navigate = useNavigate();
  const [showHero, setShowHero] = useState(false);
  const [heroComplete, setHeroComplete] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('portfolio_visited');
    
    if (!hasVisited) {
      setShowHero(true);
      localStorage.setItem('portfolio_visited', 'true');
    } else {
      // If user has visited before, go directly to layout view
      setHeroComplete(true);
    }
  }, []);

  const handleHeroComplete = () => {
    setHeroComplete(true);
  };

  const handleNavigation = (section: string) => {
    navigate(`/${section}`);
  };

  if (showHero && !heroComplete) {
    return <HeroSection onComplete={handleHeroComplete} />;
  }

  // Default landing page for return visits
  return (
    <Layout>
      <div className="space-y-12 text-center">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-accent neon-glow">
            Syed Muhammad Abbas
          </h1>
          <p className="text-2xl text-muted-foreground">
            Full-Stack Developer & Problem Solver
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate about creating efficient, scalable web applications using the MERN stack. 
            I specialize in building user-centric solutions that bridge the gap between 
            innovative design and robust functionality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
          {[
            { label: 'Projects', path: 'projects' },
            { label: 'Education', path: 'education' },
            { label: 'Hobbies', path: 'hobbies' },
            { label: 'About', path: 'about' },
            { label: 'Contact', path: 'contact' }
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className="ops-button hover:neon-glow transition-all duration-300 py-4"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="ops-card p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-card-foreground mb-6">
            Recent Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <h3 className="font-semibold text-accent">Latest Project</h3>
              <p className="text-muted-foreground">E-Commerce Platform with integrated payment systems</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-accent">Current Focus</h3>
              <p className="text-muted-foreground">Advanced React patterns and microservices architecture</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-accent">Open to</h3>
              <p className="text-muted-foreground">Remote full-time opportunities and freelance projects</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
