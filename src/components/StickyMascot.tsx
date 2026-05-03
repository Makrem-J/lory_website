'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export const StickyMascot = () => {
  const { scrollYProgress } = useScroll();
  
  // Mascot moves down as we scroll, then stays visible
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 50, 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 1000,
        y,
        scale,
        rotate,
        cursor: 'pointer'
      }}
      whileHover={{ scale: 1.1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '80px', height: '80px' }}
      >
        <circle cx="100" cy="110" r="60" fill="#E74C3C" />
        <circle cx="100" cy="120" r="40" fill="#F1C40F" />
        <circle cx="100" cy="60" r="45" fill="#E74C3C" />
        <circle cx="80" cy="55" r="8" fill="white" />
        <circle cx="80" cy="55" r="4" fill="black" />
        <circle cx="120" cy="55" r="8" fill="white" />
        <circle cx="120" cy="55" r="4" fill="black" />
        <path d="M90 70L100 95L110 70H90" fill="#E67E22" />
        {/* Animated wings */}
        <motion.path
          d="M40 100C20 80 10 110 40 130"
          stroke="#2980B9"
          strokeWidth="10"
          animate={{ rotate: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
        <motion.path
          d="M160 100C180 80 190 110 160 130"
          stroke="#2980B9"
          strokeWidth="10"
          animate={{ rotate: [20, -20, 20] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
      </svg>
    </motion.div>
  );
};
