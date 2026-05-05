'use client';

import { useTranslation } from '@/translations/TranslationContext';
import styles from '@/styles/Footer.module.css';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>loryapp.ai</div>
          <p className={styles.tagline}>Turning every journey into a digital masterpiece.</p>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.rights}>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
