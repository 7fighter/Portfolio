import { ReactNode, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { 
  Terminal, 
  Cpu, 
  Library, 
  Aperture, 
  Fingerprint, 
  Zap, 
  Hexagon 
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const imageRef = useRef<HTMLDivElement>(null);
  // Add these to your state declarations at the top of the component
  const [statusText, setStatusText] = useState("SYSTEM_BOOTING");
  const [isBooted, setIsBooted] = useState(false);
  const scramble = (text: string) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iteration = 0;
    const interval = setInterval(() => {
      setStatusText(prev =>
        text.split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsBooted(true);
        // Assuming your scramble function can update state or you update it here
        setStatusText("SYSTEM_ACTIVE");
        scramble("SYSTEM_ACTIVE");
      }
    });

    tl.fromTo(imageRef.current,
      { scale: 1.5, filter: 'brightness(2) contrast(2)' },
      { scale: 1, filter: 'brightness(0.4) contrast(1.1)', duration: 1, ease: "expo.out" }
    );

    // Initial scramble call
    setTimeout(() => {
      setStatusText("DECRYPTING_BIO");
      scramble("DECRYPTING_BIO");
    }, 300);
  }, []);

const navigationItems = [
    { path: '/', icon: Terminal, label: 'ROOT' },
    { path: '/projects', icon: Cpu, label: 'CORES' },
    { path: '/education', icon: Library, label: 'DATA' },
    { path: '/hobbies', icon: Aperture, label: 'SENSORS' },
    { path: '/about', icon: Fingerprint, label: 'BIO' },
    { path: '/contact', icon: Zap, label: 'UPLINK' }
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
    <nav className="fixed left-0 top-0 h-full w-24 border-r border-white/10 bg-black/60 backdrop-blur-2xl z-50 flex flex-col items-center py-8 justify-between">
        
        {/* Top Logo Area */}
        <Link to="/" className="relative group">
          <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
          <Hexagon size={32} className="text-accent relative z-10 animate-[spin_10s_linear_infinite]" fill="currentColor" fillOpacity={0.1} />
        </Link>

        {/* Icons Container */}
        <div className="flex flex-col gap-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path} className="relative group flex items-center justify-center">
                {/* Active Indicator Rail */}
                {isActive && (
                  <motion.div 
                    layoutId="navGlow"
                    className="absolute -left-8 w-2 h-10 bg-accent blur-[4px] rounded-r-full"
                  />
                )}

                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-3 rounded-xl border transition-all duration-300 flex items-center justify-center
                    ${isActive 
                      ? 'bg-accent/10 border-accent/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]' 
                      : 'border-transparent hover:border-white/20 hover:bg-white/5'
                    }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={`transition-colors duration-300 ${isActive ? 'text-accent' : 'text-zinc-500 group-hover:text-white'}`}
                  />

                  {/* Corner Accents for Active Icon */}
                  {isActive && (
                    <>
                      <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-accent" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-right-2 border-accent" />
                    </>
                  )}
                </motion.div>

                {/* Tooltip (Cyberpunk Style) */}
                <div className="absolute left-20 px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] font-mono tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap z-[60]">
                  <span className="text-white/40 mr-2">//</span>
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Vertical Version Tag */}
        <div className="flex flex-col items-center gap-4">
           <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
           <div className="whitespace-nowrap text-[9px] font-mono text-zinc-600 tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180 py-4">
  System_v2.6 <span className="text-accent/40 text-[7px]">●</span> 2026
</div>
        </div>
      </nav>

      {/* --- TOP STATUS BAR --- */}
      <header className="fixed top-0 left-20 right-0 h-16 border-b border-white/5 bg-black/20 backdrop-blur-md z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          {/* The pulse dot changes color based on boot status */}
          <div className={`w-2 h-2 rounded-full animate-pulse ${isBooted ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-yellow-500'}`} />

          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            Status: <span className={isBooted ? "text-white" : "text-accent"}>{statusText}</span>
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-[10px] font-mono text-muted-foreground">
          <span className="opacity-50">LOC_TRK:</span>
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