// src/components/BackButton.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define the props for the BackButton component
interface BackButtonProps {
  // An optional onClick handler for custom logic (e.g., closing a modal)
  onClick?: () => void;
  // An optional label for the button, defaults to 'Back'
  label?: string;
  // You can add a className prop for custom styling if needed
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, label = 'Back', className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick();
    } else {
      // If no custom onClick is provided, use browser history to go back
      navigate(-1);
    }
  };

  return (
    <button
      className={`back-button neon-glow ${className || ''}`}
      onClick={handleBack}
    >
      <span className="icon">&larr;</span> {label}
    </button>
  );
};

export default BackButton;