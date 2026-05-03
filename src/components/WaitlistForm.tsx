'use client';

import { useState } from 'react';
import { useTranslation } from '@/translations/TranslationContext';
import { joinWaitlist } from '@/app/actions';
import { motion } from 'framer-motion';
import styles from '@/styles/WaitlistForm.module.css';

export const WaitlistForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const result = await joinWaitlist(email);
    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('waitlist.title')}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('waitlist.emailPlaceholder')}
          required
          className={styles.input}
          disabled={status === 'loading' || status === 'success'}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={styles.button}
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? '...' : t('waitlist.button')}
        </motion.button>
      </form>
      {status === 'success' && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.success}>
          {t('waitlist.success')}
        </motion.p>
      )}
      {status === 'error' && (
        <p className={styles.error}>{t('waitlist.error')}</p>
      )}
    </div>
  );
};
