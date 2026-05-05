'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import { JourneyMap } from './JourneyMap';
import styles from '@/styles/Hero.module.css';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <JourneyMap />
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.badge}
        >
          ✨ {t('hero.badge')}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.title}
        >
          {t('hero.title1')} <br />
          <span style={{ color: 'var(--brand-primary)' }}>{t('hero.title2')}</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.subtitle}
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <div className={styles.actions}>
          <button className="pill-button primary-btn">
            {t('hero.cta')}
          </button>
          <button className="pill-button" style={{ color: 'var(--neutral-900)', border: '1px solid var(--neutral-200)' }}>
            {t('hero.watchDemo')}
          </button>
        </div>
      </div>
      
      <div className={styles.mascotAread}>
        {/* Master Mascot anchors here at start */}
      </div>
    </section>
  );
};
