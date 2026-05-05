'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { LanguageToggle } from './LanguageToggle';
import styles from '@/styles/Header.module.css';
import { motion } from 'framer-motion';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <motion.div 
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          loryapp.ai
        </motion.div>
        
        <nav className={styles.nav}>
          <div className={styles.pillNav}>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('nav.features')}
            </button>
            <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('nav.howItWorks')}
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('nav.contact')}
            </button>
          </div>
          <div className={styles.actions}>
            <LanguageToggle />
            <button className="pill-button primary-btn" style={{ fontSize: '0.8rem' }}>
              {t('hero.cta')}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
