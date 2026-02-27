import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Star, ShieldCheck, MessageSquareQuote } from 'lucide-react';
import { toast } from 'sonner';

// This data will eventually come from your API/Database
const INITIAL_TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    company: 'Tech Solutions Inc.',
    message: 'Abbas delivered an exceptional e-commerce platform. His technical expertise is outstanding.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'Digital Innovations',
    message: 'High-quality, maintainable code and clear communication throughout the project.',
    rating: 5
  }
];

const itemVars = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const TestimonialSystem = () => {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', rating: 5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // BACKEND_INTEGRATION_POINT: 
    // This is where you will call your API (e.g., await axios.post('/api/testimonials', form))
    
    toast.success('TRANSMISSION_SUCCESS: Data queued for verification.');
    
    // For now, we just clear the form
    setForm({ name: '', email: '', company: '', message: '', rating: 5 });
  };

  return (
    <div className="space-y-8">
      {/* --- FEEDBACK FORM --- */}
      <motion.div variants={itemVars} className="bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden">
        <ShieldCheck className="absolute -top-10 -right-10 text-white/[0.02]" size={200} />
        
        <div className="flex items-center gap-3 mb-8">
          <MessageSquareQuote className="text-accent" />
          <h2 className="text-2xl font-black uppercase tracking-tight">Submit Feedback</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Ident_Name"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-accent/50 text-sm"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Comm_Email"
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-accent/50 text-sm"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Message_Packet_Data..."
            rows={4}
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-accent/50 text-sm resize-none"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button className="w-full py-4 bg-accent text-black font-black uppercase tracking-widest rounded-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3">
            Initialize Transmission <Send size={18} />
          </button>
        </form>
      </motion.div>

      {/* --- TESTIMONIAL FEED --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <motion.div key={i} variants={itemVars} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={12} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed italic">"{t.message}"</p>
            <p className="text-xs font-bold text-white uppercase">{t.name}</p>
            <p className="text-[10px] text-accent/50 font-mono">{t.company}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSystem;