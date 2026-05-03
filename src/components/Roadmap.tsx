'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import styles from '@/styles/Roadmap.module.css';

export const Roadmap = () => {
  const { t } = useTranslation();

  const phases = [
    { key: 'phase1', date: 'Q3 2026' },
    { key: 'phase2', date: 'Q4 2026' },
    { key: 'phase3', date: '2027' },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('roadmap.title')}</h2>
      <div className={styles.grid}>
        {phases.map((phase, index) => (
          <motion.div
            key={phase.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className={styles.card}
          >
            <span className={styles.date}>{phase.date}</span>
            <p className={styles.text}>{t(`roadmap.${phase.key}`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
