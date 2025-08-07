import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Send, Star } from 'lucide-react';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import phoneImage from '@/assets/phone.jpg';

const ContactSection = () => {
  const objectRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);
  
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    rating: 5
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abbas.dev@email.com',
      href: 'mailto:abbas.dev@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 300 1234567',
      href: 'tel:+923001234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Solutions Inc.',
      message: 'Abbas delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Innovations',
      message: 'Working with Abbas was a pleasure. He communicated clearly throughout the project and delivered high-quality, maintainable code.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'StartupHub',
      message: 'Abbas helped us build our MVP from scratch. His full-stack expertise and problem-solving skills were invaluable to our success.',
      rating: 5
    }
  ];

  useEffect(() => {
    const object = objectRef.current;
    const content = contentRef.current;
    const dust = dustRef.current;

    if (!object || !content || !dust) return;

    // Initial setup
    gsap.set(object, { y: -300, rotation: 15 });
    gsap.set(content, { x: 100, opacity: 0 });
    gsap.set(dust, { opacity: 0 });

    // Animation timeline
    const tl = gsap.timeline();

    // Drop animation
    tl.to(object, {
      y: 0,
      rotation: 0,
      duration: 1.2,
      ease: "bounce.out"
    })
    // Ring effect (simulate phone ringing)
    .to(object, {
      rotation: 5,
      duration: 0.1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 3
    }, "-=0.5")
    // Dust effect
    .to(dust, {
      opacity: 1,
      duration: 0.3
    }, "-=0.3")
    .to(dust, {
      opacity: 0,
      duration: 0.5
    }, "+=0.2")
    // Slide in content
    .to(content, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      tl.kill();
    };
  }, []);

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to your backend
    toast.success('Thank you for your testimonial! It will be reviewed and added soon.');
    setTestimonialForm({
      name: '',
      email: '',
      company: '',
      message: '',
      rating: 5
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTestimonialForm(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  const LeftColumnContent = () => (
    <div className="relative">
      <div
        ref={objectRef}
        className="w-48 h-48 flex items-center justify-center"
      >
        <img
          src={phoneImage}
          alt="Vintage phone"
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      </div>
      {/* Dust particles */}
      <div
        ref={dustRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 opacity-0"
      >
        <div className="w-full h-full bg-dust-particle opacity-30 blur-sm rounded-full"></div>
      </div>
    </div>
  );

  return (
    <Layout leftColumnContent={<LeftColumnContent />}>
      <div ref={contentRef} className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-accent mb-4">Contact Me</h1>
          <p className="text-lg text-muted-foreground">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-6">
              Get In Touch
            </h2>
            
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="ops-card p-6 group hover:neon-glow transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent text-accent-foreground p-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">
                        {contact.label}
                      </h3>
                      {contact.href !== '#' ? (
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Availability */}
            <div className="ops-card p-6">
              <h3 className="font-semibold text-card-foreground mb-4">Availability</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>🟢 Available for new projects</p>
                <p>⏰ Response time: Within 24 hours</p>
                <p>🌍 Time zone: GMT+5 (Pakistan)</p>
                <p>💼 Open to remote work worldwide</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-6">
              Client Testimonials
            </h2>

            {/* Add Testimonial Form */}
            <div className="ops-card p-6">
              <h3 className="font-semibold text-card-foreground mb-4">Leave a Testimonial</h3>
              <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={testimonialForm.name}
                    onChange={handleInputChange}
                    className="bg-input border border-border px-4 py-2 text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={testimonialForm.email}
                    onChange={handleInputChange}
                    className="bg-input border border-border px-4 py-2 text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={testimonialForm.company}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border px-4 py-2 text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                
                <div className="flex items-center gap-4">
                  <label className="text-card-foreground">Rating:</label>
                  <select
                    name="rating"
                    value={testimonialForm.rating}
                    onChange={handleInputChange}
                    className="bg-input border border-border px-3 py-2 text-foreground focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    {[5, 4, 3, 2, 1].map(num => (
                      <option key={num} value={num}>{num} Star{num !== 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                
                <textarea
                  name="message"
                  placeholder="Your testimonial..."
                  value={testimonialForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-input border border-border px-4 py-2 text-foreground focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  required
                />
                
                <button
                  type="submit"
                  className="ops-button flex items-center gap-2 w-full justify-center"
                >
                  <Send size={16} />
                  Submit Testimonial
                </button>
              </form>
            </div>

            {/* Existing Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="ops-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.message}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-card-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactSection;
