import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Code, GraduationCap, Camera, User, Phone } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: Code, label: 'Projects' },
    { path: '/education', icon: GraduationCap, label: 'Education' },
    { path: '/hobbies', icon: Camera, label: 'Hobbies' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/contact', icon: Phone, label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-accent/30 overflow-x-hidden">
      
      {/* --- DYNAMIC AMBIENCE --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.05),transparent_70%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* --- LEFT HUD BAR (Vertical Navigation) --- */}
      <nav className="fixed left-0 top-0 h-full w-20 border-r border-white/5 bg-black/40 backdrop-blur-xl z-50 flex flex-col items-center py-10 justify-between">
        <Link to="/" className="text-accent font-black text-2xl tracking-tighter hover:scale-110 transition-transform">
          A.
        </Link>

        <div className="flex flex-col gap-8">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className="relative group">
                <Icon 
                  size={22} 
                  className={`transition-colors duration-300 ${isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-white'}`} 
                />
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -left-6 top-0 w-1 h-full bg-accent shadow-[0_0_15px_#8b5cf6]" 
                  />
                )}
                {/* Tooltip */}
                <span className="absolute left-14 top-0 px-2 py-1 bg-accent text-[10px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="whitespace-nowrap text-[10px] font-mono text-muted-foreground tracking-[0.2em] uppercase origin-left -rotate-90 translate-x-1/2">
  Abbas_Dev_v2.6
</div>
      </nav>

      {/* --- TOP STATUS BAR --- */}
      <header className="fixed top-0 left-20 right-0 h-16 border-b border-white/5 bg-black/20 backdrop-blur-md z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            System_Status: Optimal
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-[10px] font-mono text-muted-foreground">
          <span>LAT: 33.78</span>
          <span>LONG: 72.36</span>
        </div>
      </header>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <main className="pl-20 pt-16 relative z-10">
        <div className="container mx-auto px-6 py-12">
          {children}
        </div>
      </main>

      {/* --- SCANLINE EFFECT --- */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
};

export default Layout;