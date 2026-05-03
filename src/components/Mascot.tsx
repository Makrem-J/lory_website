'use client';

import { motion } from 'framer-motion';

export const Mascot = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        type: 'spring', 
        bounce: 0.4 
      }}
      style={{ width: '300px', height: '300px', position: 'relative' }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Body */}
        <motion.circle
          cx="100"
          cy="110"
          r="60"
          fill="#E74C3C" // Red body
          animate={{ scaleY: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        
        {/* Chest/Belly */}
        <circle cx="100" cy="120" r="40" fill="#F1C40F" /> // Yellow belly
        
        {/* Wings */}
        <motion.path
          d="M40 100C20 80 10 110 40 130"
          stroke="#2980B9" // Blue wing
          strokeWidth="15"
          strokeLinecap="round"
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M160 100C180 80 190 110 160 130"
          stroke="#2980B9" // Blue wing
          strokeWidth="15"
          strokeLinecap="round"
          animate={{ rotate: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />

        {/* Head */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <circle cx="100" cy="60" r="45" fill="#E74C3C" />
          {/* Eyes */}
          <circle cx="80" cy="55" r="8" fill="white" />
          <circle cx="80" cy="55" r="4" fill="black" />
          <circle cx="120" cy="55" r="8" fill="white" />
          <circle cx="120" cy="55" r="4" fill="black" />
          
          {/* Beak */}
          <path d="M90 70L100 95L110 70H90" fill="#E67E22" />
        </motion.g>

        {/* Tail */}
        <motion.path
          d="M80 170L100 190L120 170"
          fill="#27AE60" // Green tail
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
};
