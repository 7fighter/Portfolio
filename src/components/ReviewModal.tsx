import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reviewData: { name: string; rating: number; text: string }) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && rating && text) {
      onSubmit({ name, rating, text });
      // Reset form
      setName('');
      setRating(0);
      setText('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-hacker-bg/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-hacker-surface/90 backdrop-blur-xl border border-hacker-green/30 rounded-lg p-6 w-full max-w-md shadow-neon-green"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-hacker-green/10 rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-hacker-green" />
            </motion.button>

            <h2 className="text-2xl font-mono font-bold text-hacker-green mb-6 glow-text">WRITE_REVIEW</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-mono font-medium text-gray-300 mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-hacker-surface/50 border border-hacker-green/30 rounded px-4 py-2 text-white placeholder-gray-500 focus:border-hacker-green focus:outline-none transition-colors duration-200 font-mono"
                  placeholder="enter_name"
                  required
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-mono font-medium text-gray-300 mb-2">
                  RATING
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoveredRating || rating)
                            ? 'text-hacker-green fill-hacker-green'
                            : 'text-gray-400'
                        } transition-colors duration-200`}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-sm font-mono font-medium text-gray-300 mb-2">
                  REVIEW
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  className="w-full bg-hacker-surface/50 border border-hacker-green/30 rounded px-4 py-2 text-white placeholder-gray-500 focus:border-hacker-green focus:outline-none transition-colors duration-200 resize-none font-mono"
                  placeholder="share_experience..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-hacker-surface border border-hacker-green/30 hover:bg-hacker-green/10 hover:shadow-neon-green text-hacker-green font-mono py-3 px-6 rounded transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                disabled={!name || !rating || !text}
              >
                SUBMIT_REVIEW
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewModal;