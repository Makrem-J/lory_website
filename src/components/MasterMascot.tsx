'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const MasterMascot = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring physics for smooth movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic transformations based on scroll
  // Starts at top right/center, moves to bottom right corner
  const scale = useTransform(smoothProgress, [0, 0.2], [1.5, 0.5]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const x = useTransform(smoothProgress, [0, 0.2], ["0%", "40%"]);
  const y = useTransform(smoothProgress, [0, 0.2], ["0%", "85vh"]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: '15vh',
        right: '50%',
        x: "-50%",
        zIndex: 1000,
        scale,
        rotate,
        translateX: x,
        translateY: y,
        pointerEvents: 'none',
        width: '400px',
        height: '400px',
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' }}
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4757" />
            <stop offset="100%" stopColor="#E63946" />
          </linearGradient>
          <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" />
            <stop offset="100%" stopColor="#3742FA" />
          </linearGradient>
          <linearGradient id="bellyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA502" />
            <stop offset="100%" stopColor="#FF7F50" />
          </linearGradient>
        </defs>

        {/* Tail Feathers - Detailed */}
        <motion.g
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <path d="M80 150 L100 190 L120 150" fill="#2ED573" opacity="0.8" />
          <path d="M70 145 L100 185 L130 145" fill="#26DE81" opacity="0.6" />
        </motion.g>

        {/* Detailed Body */}
        <circle cx="100" cy="115" r="55" fill="url(#bodyGrad)" />
        <circle cx="100" cy="125" r="40" fill="url(#bellyGrad)" />
        
        {/* Layered Wings */}
        <motion.g
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ originX: "40px", originY: "110px" }}
        >
          <path d="M45 110 C 10 90, 10 130, 45 140" fill="url(#wingGrad)" />
          <path d="M35 115 C 5 100, 5 130, 35 135" fill="#5352ED" opacity="0.5" />
        </motion.g>

        <motion.g
          animate={{ rotate: [15, -15, 15] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ originX: "160px", originY: "110px" }}
        >
          <path d="M155 110 C 190 90, 190 130, 155 140" fill="url(#wingGrad)" />
          <path d="M165 115 C 195 100, 195 130, 165 135" fill="#5352ED" opacity="0.5" />
        </motion.g>

        {/* Head with more detail */}
        <motion.g
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{ originX: "100px", originY: "70px" }}
        >
          <circle cx="100" cy="70" r="42" fill="url(#bodyGrad)" />
          
          {/* Eyes with highlights */}
          <circle cx="82" cy="65" r="10" fill="white" />
          <motion.circle 
            cx="84" cy="65" r="5" fill="black" 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <circle cx="80" cy="62" r="3" fill="white" opacity="0.8" />

          <circle cx="118" cy="65" r="10" fill="white" />
          <motion.circle 
            cx="116" cy="65" r="5" fill="black"
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <circle cx="116" cy="62" r="3" fill="white" opacity="0.8" />
          
          {/* Beak with depth */}
          <path d="M92 82 L100 108 L108 82 H92" fill="#FF7F50" />
          <path d="M100 82 L100 108 L108 82 H100" fill="#E67E22" />
          
          {/* Little "Hair" Crest */}
          <path d="M95 30 Q 100 10 105 30" stroke="#FF4757" strokeWidth="4" fill="none" />
        </motion.g>
      </svg>
    </motion.div>
  );
};
