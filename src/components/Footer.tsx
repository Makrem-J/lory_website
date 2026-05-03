'use client';

import { useTranslation } from '@/translations/TranslationContext';
import styles from '@/styles/Footer.module.css';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>{t('footer.rights')}</p>
    </footer>
  );
};
