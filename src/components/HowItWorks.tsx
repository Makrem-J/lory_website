'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import styles from '@/styles/HowItWorks.module.css';
import { Map, AudioLines, Camera } from 'lucide-react';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { key: 'step1', icon: <Map size={40} /> },
    { key: 'step2', icon: <AudioLines size={40} /> },
    { key: 'step3', icon: <Camera size={40} /> },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('howItWorks.title')}</h2>
      <div className={styles.grid}>
        {steps.map((step, index) => (
          <motion.div
            key={step.key}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className={styles.card}
          >
            <div className={styles.icon}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{t(`howItWorks.${step.key}.title`)}</h3>
            <p className={styles.desc}>{t(`howItWorks.${step.key}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
