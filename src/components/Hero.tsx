'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { JourneyMap } from './JourneyMap';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <JourneyMap />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.badge}
        >
          ✨ {t('hero.badge') || "The future of travel is here"}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          <span className="gradient-text">{t('hero.title')}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.subtitle}
        >
          {t('hero.subtitle')}
        </motion.p>
        <div className={styles.actions}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 71, 87, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className={styles.cta}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </motion.button>
          <button className={styles.secondaryBtn}>
            {t('hero.watchDemo') || "Watch Demo"}
          </button>
        </div>
        
        {/* Stats Placeholder */}
        <div className={styles.stats}>
          <div>
            <strong>10+</strong>
            <span>{t('hero.cities') || "Cities"}</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>{t('hero.offline') || "Offline"}</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>{t('hero.rating') || "Rating"}</span>
          </div>
        </div>
      </div>
      <div className={styles.mascotSpacer}>
        {/* This div just reserves space for the MasterMascot when at the top */}
      </div>
    </section>
  );
};
