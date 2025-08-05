import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Star } from 'lucide-react';
import DroppingObject from '../components/DroppingObject';
import DustEffect from '../components/DustEffect';
import ReviewModal from '../components/ReviewModal';

const Contact: React.FC = () => {
  const [showDust, setShowDust] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [phoneRinging, setPhoneRinging] = useState(false);

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Excellent work on our e-commerce project. Very professional and delivered on time!",
      date: "2024-01-15"
    },
    {
      name: "Ahmed Ali",
      rating: 5,
      text: "Outstanding developer with great communication skills. Highly recommended!",
      date: "2024-01-10"
    },
    {
      name: "Maria Rodriguez",
      rating: 4,
      text: "Great experience working with Abbas. Clean code and innovative solutions.",
      date: "2024-01-05"
    }
  ];

  const handleObjectDrop = () => {
    setShowDust(true);
    setTimeout(() => {
      setShowContent(true);
      setPhoneRinging(true);
      // Stop ringing after 3 seconds
      setTimeout(() => setPhoneRinging(false), 3000);
    }, 500);
  };

  const handleReviewSubmit = (reviewData: any) => {
    // Here you would typically send to your backend
    console.log('Review submitted:', reviewData);
    setShowReviewModal(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-hacker-bg">
      <div className="grid lg:grid-cols-2 gap-8 h-screen">
        {/* Left Side - Dropping Object */}
        <div className="flex items-center justify-center relative">
          <DroppingObject onAnimationComplete={handleObjectDrop}>
            <div className="text-6xl font-mono text-hacker-green glow-text">
              @MSG
            </div>
          </DroppingObject>
          <DustEffect show={showDust} />
          
          {/* Animated Phone */}
          {showContent && (
            <motion.div
              className="absolute bottom-20 text-8xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="text-hacker-green glow-text"
                animate={phoneRinging ? {
                  rotate: [0, -10, 10, -10, 10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                } : {}}
                transition={{ duration: 0.5, repeat: phoneRinging ? 6 : 0 }}
              >
                ☎
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Right Side - Content */}
        <div className="flex items-center justify-center p-8">
          {showContent && (
            <motion.div
              className="w-full max-w-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-5xl font-mono font-bold mb-8 text-hacker-green glow-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ./contact
              </motion.h1>

              <div className="space-y-6">
                <div className="bg-hacker-surface/50 backdrop-blur-xl border border-hacker-green/20 rounded-lg p-6">
                  <h2 className="text-2xl font-mono font-bold text-hacker-green mb-6 glow-text">CONTACT_INFO</h2>
                  
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center space-x-4 p-4 bg-hacker-surface/30 rounded-lg hover:bg-hacker-green/10 transition-colors duration-300 border border-hacker-green/20"
                      whileHover={{ x: 5 }}
                    >
                      <Mail className="w-6 h-6 text-hacker-green" />
                      <div>
                        <div className="font-mono font-medium text-white">EMAIL</div>
                        <div className="font-mono text-gray-300">syed.muhammad.abbas@email.com</div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-4 p-4 bg-hacker-surface/30 rounded-lg hover:bg-hacker-green/10 transition-colors duration-300 border border-hacker-green/20"
                      whileHover={{ x: 5 }}
                    >
                      <Phone className="w-6 h-6 text-hacker-green" />
                      <div>
                        <div className="font-mono font-medium text-white">PHONE</div>
                        <div className="font-mono text-gray-300">+92 300 1234567</div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={() => setShowReviewModal(true)}
                    className="w-full mt-6 bg-hacker-surface border border-hacker-green/30 hover:bg-hacker-green/10 hover:shadow-neon-green text-hacker-green font-mono py-3 px-6 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-5 h-5 inline-block mr-2" />
                    WRITE_REVIEW
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
          </div>

      {/* Reviews Section */}
      {showContent && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 bg-hacker-surface/20 backdrop-blur-xl border-t border-hacker-green/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl font-mono font-bold text-center text-hacker-green mb-6 glow-text">CLIENT_REVIEWS</h2>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-hacker-surface/50 border border-hacker-green/20 rounded-lg p-4 hover:border-hacker-green/50 hover:shadow-neon-green transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`w-3 h-3 ${
                        starIndex < review.rating 
                          ? 'text-hacker-green fill-hacker-green' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-3 text-sm font-mono">"{review.text}"</p>
                
                <div className="flex justify-between items-center">
                  <span className="font-mono font-medium text-hacker-green text-sm">{review.name}</span>
                  <span className="text-xs text-gray-500 font-mono">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <ReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
};

export default Contact;