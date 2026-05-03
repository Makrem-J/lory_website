'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { Mascot } from './Mascot';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.subtitle}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.cta}
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('hero.cta')}
        </motion.button>
      </div>
      <div className={styles.mascotContainer}>
        <Mascot />
      </div>
    </section>
  );
};
