'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { LanguageToggle } from './LanguageToggle';
import styles from '@/styles/Header.module.css';
import { motion } from 'framer-motion';

export const Header = () => {
  const { t } = useTranslation();

  const menuItems = [
    { key: 'howItWorks', id: 'how-it-works' },
    { key: 'features', id: 'features' },
    { key: 'roadmap', id: 'roadmap' },
    { key: 'faq', id: 'faq' },
    { key: 'blog', id: 'blog' },
    { key: 'news', id: 'news' },
    { key: 'contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className={styles.logo}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        lory.ai
      </motion.div>
      <nav className={styles.nav}>
        <div className={styles.menu}>
          {menuItems.map((item) => (
            <button key={item.key} onClick={() => scrollTo(item.id)} className={styles.navLink}>
              {t(`nav.${item.key}`)}
            </button>
          ))}
        </div>
        <LanguageToggle />
      </nav>
    </header>
  );
};
