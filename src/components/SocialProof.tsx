'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/SocialProof.module.css';

export const SocialProof = () => {
  const logos = ['Global Traveler', 'TechCrunch', 'Travel + Leisure', 'Nomad List'];

  return (
    <div className={styles.container}>
      <p className={styles.label}>FEATURED IN & TRUSTED BY</p>
      <div className={styles.track}>
        {logos.map((logo, i) => (
          <motion.span 
            key={i} 
            className={styles.logo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ delay: i * 0.2 }}
          >
            {logo}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
