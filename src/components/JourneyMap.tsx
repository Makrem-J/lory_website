'use client';

import { motion } from 'framer-motion';

export const JourneyMap = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.1, zIndex: -1 }}>
      <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        {/* Animated Path */}
        <motion.path
          d="M-50 300 C 100 100, 300 500, 500 300 S 800 100, 1100 300"
          stroke="var(--primary)"
          strokeWidth="2"
          strokeDasharray="10 10"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Dots (Cities) */}
        {[
          { x: 100, y: 150, label: 'Nice' },
          { x: 300, y: 450, label: 'Paris' },
          { x: 500, y: 300, label: 'Rome' },
          { x: 800, y: 150, label: 'Barcelona' }
        ].map((city, i) => (
          <motion.g 
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.5 }}
          >
            <circle cx={city.x} cy={city.y} r="5" fill="var(--primary)" />
            <circle cx={city.x} cy={city.y} r="10" stroke="var(--primary)" strokeOpacity="0.3" fill="none">
              <animate attributeName="r" from="5" to="15" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};
