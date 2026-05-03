'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import styles from '@/styles/Features.module.css';
import { Sparkles, CloudOff, Video } from 'lucide-react';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    { key: 'aiItineraries', icon: <Sparkles size={48} />, color: '#E74C3C' },
    { key: 'offlineGuides', icon: <CloudOff size={48} />, color: '#2980B9' },
    { key: 'vlogue', icon: <Video size={48} />, color: '#27AE60' },
  ];

  return (
    <section id="features" className={styles.section}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={styles.title}
      >
        {t('features.title')}
      </motion.h2>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={styles.card}
            style={{ borderTop: `6px solid ${f.color}` }}
          >
            <div className={styles.icon} style={{ color: f.color }}>{f.icon}</div>
            <h3 className={styles.featureTitle}>{t(`features.${f.key}.title`)}</h3>
            <p className={styles.desc}>{t(`features.${f.key}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
