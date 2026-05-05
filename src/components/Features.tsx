'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import styles from '@/styles/Features.module.css';
import { Camera, Video, Library, MapPin } from 'lucide-react';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    { 
      key: 'aiItineraries', 
      icon: <MapPin size={32} />, 
      color: 'var(--brand-primary)',
      span: 'large' 
    },
    { 
      key: 'offlineGuides', 
      icon: <Library size={32} />, 
      color: 'var(--accent-travel)',
      span: 'small' 
    },
    { 
      key: 'vlogue', 
      icon: <Video size={32} />, 
      color: 'var(--brand-secondary)',
      span: 'small' 
    },
    { 
      key: 'aiPhotos', 
      icon: <Camera size={32} />, 
      color: 'var(--accent-nature)',
      span: 'large' 
    }
  ];

  return (
    <section id="features" className={styles.section}>
      <div className={styles.header}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={styles.badge}
        >
          {t('features.badge') || "Powered by Lory AI"}
        </motion.span>
        <h2 className={styles.title}>{t('features.title')}</h2>
      </div>

      <div className={styles.bentoGrid}>
        {features.map((f, i) => (
          <motion.div
            key={f.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`${styles.card} ${styles[f.span]}`}
          >
            <div className={styles.iconContainer} style={{ background: f.color }}>
              {f.icon}
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t(`features.${f.key}.title`)}</h3>
              <p className={styles.cardDesc}>{t(`features.${f.key}.desc`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
