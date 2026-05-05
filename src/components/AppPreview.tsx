'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import styles from '@/styles/AppPreview.module.css';

export const AppPreview = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textSide}>
          <h2 className={styles.title}>{t('preview.title')}</h2>
          <p className={styles.desc}>{t('preview.desc')}</p>
          <ul className={styles.list}>
            <li>✓ {t('preview.item1')}</li>
            <li>✓ {t('preview.item2')}</li>
            <li>✓ {t('preview.item3')}</li>
          </ul>
        </div>
        
        <div className={styles.phoneSide}>
          <motion.div 
            className={styles.phone}
            initial={{ rotateY: -20, rotateX: 10 }}
            whileHover={{ rotateY: 0, rotateX: 0 }}
          >
            {/* Screen Content */}
            <div className={styles.screen}>
              <div className={styles.screenHeader}>{t('preview.location')}</div>
              <div className={styles.mapArea}>
                <div className={styles.mapPoint} style={{ top: '30%', left: '40%' }}></div>
                <div className={styles.mapPoint} style={{ top: '60%', left: '70%' }}></div>
                <div className={styles.mapPath}></div>
              </div>
              <div className={styles.itineraryList}>
                <div className={styles.listItem}>
                  <span>09:00</span>
                  <strong>Promenade des Anglais</strong>
                </div>
                <div className={styles.listItem} style={{ background: 'var(--brand-primary)', color: 'white' }}>
                  <span>11:30</span>
                  <strong>Old Town (Vieux Nice)</strong>
                </div>
                <div className={styles.listItem}>
                  <span>14:00</span>
                  <strong>Castle Hill Viewpoint</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
