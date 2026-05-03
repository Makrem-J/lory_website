'use client';

import { LanguageToggle } from './LanguageToggle';
import styles from '@/styles/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>lory.ai</div>
      <nav className={styles.nav}>
        <LanguageToggle />
      </nav>
    </header>
  );
};
