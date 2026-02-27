import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Radio } from 'lucide-react';
import Layout from '@/components/Layout';
import TestimonialSystem from './TestimonialSystem'; // Import the new component

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: 'PROTOCOL: EMAIL', value: 'abbas.dev@email.com', href: 'mailto:abbas.dev@email.com' },
    { icon: Phone, label: 'VOICE: ENCRYPTED', value: '+92 300 1234567', href: 'tel:+923001234567' },
    { icon: MapPin, label: 'NODE: LOCATION', value: 'Lahore, Pakistan', href: '#' }
  ];

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVars: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <Layout>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="max-w-6xl mx-auto pb-24 space-y-16"
      >
        {/* --- HEADER --- */}
        <motion.div variants={itemVars} className="pt-10">
          <div className="flex items-center gap-3 text-accent font-mono text-xs tracking-[0.5em] mb-4">
            <Radio size={14} className="animate-pulse" /> // ESTABLISHING_CONNECTION
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            GET IN <br />
            <span className="text-outline-white text-white/10 italic">TOUCH</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* --- LEFT: CONNECTION METHODS --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  variants={itemVars}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-accent/40 transition-all group"
                >
                  <div className="p-4 bg-accent/10 text-accent rounded-xl group-hover:bg-accent group-hover:text-black transition-colors">
                    <contact.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground tracking-widest">{contact.label}</p>
                    <p className="text-lg font-bold">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Monitor */}
            <motion.div variants={itemVars} className="p-8 bg-accent/5 border border-accent/20 rounded-[2rem]">
              <div className="flex items-center justify-between mb-6 text-[10px] font-mono">
                <span className="tracking-tighter">Uplink_Status</span>
                <span className="text-green-500">● ONLINE</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                Currently taking on new projects for Q3 2026.
              </p>
            </motion.div>
          </div>

          {/* --- RIGHT: TESTIMONIAL SYSTEM --- */}
          <div className="lg:col-span-7">
            <TestimonialSystem />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ContactSection;