'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { LanguageToggle } from './LanguageToggle';
import styles from '@/styles/Header.module.css';
import { motion } from 'framer-motion';

export const Header = () => {
  const { t } = useTranslation();

  const menuItems = [
    { key: 'howItWorks', id: 'how-it-works', color: '#FF4757' },
    { key: 'features', id: 'features', color: '#FFA502' },
    { key: 'roadmap', id: 'roadmap', color: '#2ED573' },
    { key: 'faq', id: 'faq', color: '#1E90FF' },
    { key: 'blog', id: 'blog', color: '#a55eea' },
    { key: 'news', id: 'news', color: '#FF4757' },
    { key: 'contact', id: 'contact', color: '#1E90FF' },
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
            <motion.button 
              key={item.key} 
              onClick={() => scrollTo(item.id)} 
              className={styles.navLink}
              whileHover={{ scale: 1.1, color: item.color }}
            >
              {t(`nav.${item.key}`)}
            </motion.button>
          ))}
        </div>
        <LanguageToggle />
      </nav>
    </header>
  );
};
