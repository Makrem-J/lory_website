'use client';

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

export const MasterMascot = () => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // Spring physics for smooth movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // 1. Scale: Begins at 60% of viewport height (approx 1.5 in relative terms) -> shrinks to 10% (approx 0.3)
  const scale = useTransform(smoothProgress, [0, 0.3], [1.5, 0.3]);
  
  // 2. Position: Anchors to bottom-right
  const x = useTransform(smoothProgress, [0, 0.3], ["0%", "42%"]);
  const y = useTransform(smoothProgress, [0, 0.3], ["10vh", "82vh"]);
  
  // 3. Sway: Rotate between -60 and 60
  // Combine scroll rotation with an ambient sway
  const scrollRotate = useTransform(smoothProgress, [0, 1], [0, 60]);
  
  // Ambient sway animation
  const sway = {
    animate: {
      rotate: shouldReduceMotion ? 0 : [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (shouldReduceMotion) {
    return (
      <div 
        style={{ position: 'fixed', bottom: '20px', right: '20px', width: '80px', height: '80px', zIndex: 1000 }}
        aria-label="Lory mascot"
      >
        <MascotSVG />
      </div>
    );
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        right: '50%',
        translateX: x,
        translateY: y,
        zIndex: 3000,
        scale,
        width: '400px',
        height: '400px',
        pointerEvents: 'none',
        willChange: 'transform',
        transformOrigin: 'center center'
      }}
      aria-label="Lory mascot"
      role="img"
    >
      <motion.div 
        style={{ width: '100%', height: '100%' }}
        variants={sway}
        animate="animate"
      >
        <MascotSVG />
      </motion.div>
    </motion.div>
  );
};

const MascotSVG = () => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
  >
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F43F5E" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
    </defs>

    {/* Tail */}
    <path d="M80 150 L100 190 L120 150" fill="#10B981" />

    {/* Body */}
    <circle cx="100" cy="110" r="55" fill="url(#bodyGrad)" />
    <circle cx="100" cy="120" r="40" fill="#F59E0B" opacity="0.9" />
    
    {/* Wings */}
    <motion.path 
      d="M45 100 C 15 80, 15 130, 45 140" fill="url(#wingGrad)"
      animate={{ rotate: [-5, 10, -5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path 
      d="M155 100 C 185 80, 185 130, 155 140" fill="url(#wingGrad)"
      animate={{ rotate: [5, -10, 5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Head */}
    <circle cx="100" cy="65" r="45" fill="url(#bodyGrad)" />
    
    {/* Eyes */}
    <circle cx="82" cy="60" r="10" fill="white" />
    <circle cx="83" cy="60" r="5" fill="#0F172A" />
    <circle cx="118" cy="60" r="10" fill="white" />
    <circle cx="117" cy="60" r="5" fill="#0F172A" />
    
    {/* Beak */}
    <path d="M92 75 L100 105 L108 75 H92" fill="#F97316" />
    
    {/* Highlight */}
    <path d="M85 35 Q 100 20 115 35" stroke="white" strokeWidth="2" opacity="0.3" fill="none" />
  </svg>
);
