'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '@/styles/Contact.module.css';

export const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>{t('contact.title')}</h2>
        {submitted ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.success}>
            {t('contact.success')}
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder={t('contact.name')} required className={styles.input} />
            <input type="email" placeholder={t('contact.email')} required className={styles.input} />
            <textarea placeholder={t('contact.message')} required className={styles.textarea} rows={4} />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.button}
            >
              {t('contact.send')}
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};
