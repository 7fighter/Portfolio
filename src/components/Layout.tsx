import { ReactNode, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Home, Code, GraduationCap, Camera, User, Phone } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  leftColumnContent?: ReactNode;
}

const Layout = ({ children, leftColumnContent }: LayoutProps) => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: Code, label: 'Projects' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/hobbies', icon: Camera, label: 'Hobbies' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/contact', icon: Phone, label: 'Contact' }
  ];

  useEffect(() => {
    // Animate navigation on mount
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-accent hover:neon-glow transition-all">
              S.M.Abbas
            </Link>
            
            <div className="flex gap-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
                      isActive 
                        ? 'text-accent neon-glow' 
                        : 'text-muted-foreground hover:text-accent hover:neon-glow'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="hidden md:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[calc(100vh-8rem)]">
            {/* Left Column - Animation Area */}
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="w-full max-w-md aspect-square flex items-center justify-center">
                {leftColumnContent}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <div className="max-w-4xl mx-auto">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;