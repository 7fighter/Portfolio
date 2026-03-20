import { ReactNode, useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { supabase } from '../supabaseClient'; // Import your client
import { 
  Terminal, 
  Cpu, 
  Library, 
  Aperture, 
  Fingerprint, 
  Zap, 
  Hexagon,
  LogOut,   // New Icon
  User      // New Icon
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [statusText, setStatusText] = useState("SYSTEM_BOOTING");
  const [isBooted, setIsBooted] = useState(false);
  const [user, setUser] = useState<any>(null); // State to hold Supabase user

  // --- AUTH LOGIC ---
  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for changes (login/logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    scramble("TERMINATING_SESSION");
    await supabase.auth.signOut();
    navigate('/auth'); // Redirect to your login page
  };

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
        const initialStatus = user ? `USER_${user.email?.split('@')[0].toUpperCase()}` : "GUEST_MODE";
        setStatusText(initialStatus);
        scramble(initialStatus);
      }
    });

    tl.fromTo(imageRef.current,
      { scale: 1.5, filter: 'brightness(2) contrast(2)' },
      { scale: 1, filter: 'brightness(0.4) contrast(1.1)', duration: 1, ease: "expo.out" }
    );
  }, [user]); // Re-run scramble when user state changes

  const navigationItems = [
    { path: '/', icon: Terminal, label: 'ROOT' },
    { path: '/projects', icon: Cpu, label: 'Projects' },
    { path: '/education', icon: Library, label: 'Education' },
    { path: '/hobbies', icon: Aperture, label: 'CoCurricular' },
    { path: '/about', icon: Fingerprint, label: 'BIO' },
    { path: '/contact', icon: Zap, label: 'ReachOut' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-accent/30 overflow-x-hidden">
      {/* ... DYNAMIC AMBIENCE (Unchanged) ... */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(139,92,246,0.05),transparent_70%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <nav className="fixed left-0 top-0 h-full w-24 border-r border-white/10 bg-black/60 backdrop-blur-2xl z-50 flex flex-col items-center py-8 justify-between">
        <Link to="/" className="relative group">
          <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full group-hover:bg-accent/40 transition-all duration-500" />
          <Hexagon size={32} className="text-accent relative z-10 animate-[spin_10s_linear_infinite]" fill="currentColor" fillOpacity={0.1} />
        </Link>

        <div className="flex flex-col gap-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
               <Link key={item.path} to={item.path} className="relative group flex items-center justify-center">
                {isActive && (
                  <motion.div layoutId="navGlow" className="absolute -left-8 w-2 h-10 bg-accent blur-[4px] rounded-r-full" />
                )}
                <motion.div
                  whileHover={{ scale: 1.1, x: 5 }}
                  className={`relative p-3 rounded-xl border transition-all duration-300 ${isActive ? 'bg-accent/10 border-accent/50' : 'border-transparent hover:border-white/20'}`}
                >
                  <Icon size={20} className={isActive ? 'text-accent' : 'text-zinc-500 group-hover:text-white'} />
                </motion.div>
                <div className="absolute left-20 px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] font-mono tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[60]">
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>

        {/* --- AUTH ACTIONS (Bottom of Sidebar) --- */}
        <div className="flex flex-col items-center gap-6">
          {user ? (
            <button 
              onClick={handleLogout}
              className="group relative p-3 rounded-xl border border-transparent hover:border-red-500/50 hover:bg-red-500/5 transition-all"
            >
              <LogOut size={20} className="text-zinc-500 group-hover:text-red-500" />
              <div className="absolute left-20 px-3 py-1 bg-zinc-900 border border-red-500/20 text-[10px] font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                TERMINATE_SESSION
              </div>
            </button>
          ) : (
            <Link to="/auth" className="group relative p-3 rounded-xl border border-transparent hover:border-accent/50 hover:bg-accent/5 transition-all">
              <User size={20} className="text-zinc-500 group-hover:text-accent" />
              <div className="absolute left-20 px-3 py-1 bg-zinc-900 border border-accent/20 text-[10px] font-mono text-accent opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                INIT_AUTH
              </div>
            </Link>
          )}
          <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="whitespace-nowrap text-[9px] font-mono text-zinc-600 tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180 py-4">
            System_v2.6 <span className="text-accent/40 text-[7px]">●</span> 2026
          </div>
        </div>
      </nav>

      {/* --- TOP STATUS BAR --- */}
      <header className="fixed top-0 left-24 right-0 h-16 border-b border-white/5 bg-black/20 backdrop-blur-md z-40 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <div className={`w-2 h-2 rounded-full animate-pulse ${user ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-accent shadow-[0_0_8px_#8b5cf6]'}`} />
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
            Status: <span className="text-white">{statusText}</span>
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-[10px] font-mono text-muted-foreground">
          {user && <span className="text-accent">AUTH_TOKEN: VALID</span>}
          <span>LAT: 33.78</span>
          <span>LONG: 72.36</span>
        </div>
      </header>

      <main className="pl-24 pt-16 relative z-10">
        <div className="container mx-auto px-6 py-12">
          {children}
        </div>
      </main>

      {/* ... SCANLINE EFFECT (Unchanged) ... */}
      <div className="fixed inset-0 pointer-events-none z-[100] bg-[length:100%_4px,3px_100%] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))]" />
    </div>
  );
};

export default Layout;