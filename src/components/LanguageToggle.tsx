'use client';

import { useTranslation } from '@/translations/TranslationContext';
import styles from '@/styles/LanguageToggle.module.css';

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className={styles.container}>
      <button
        onClick={() => setLanguage('en')}
        className={language === 'en' ? styles.active : styles.inactive}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={language === 'fr' ? styles.active : styles.inactive}
      >
        FR
      </button>
    </div>
  );
};
