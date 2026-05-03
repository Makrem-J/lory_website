'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '@/styles/GDPR.module.css';

export const GDPR = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lory-consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('lory-consent', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className={styles.popup}
        >
          <p>{t('gdpr.text')}</p>
          <button onClick={accept} className={styles.button}>{t('gdpr.accept')}</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
