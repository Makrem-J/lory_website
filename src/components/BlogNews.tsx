'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion } from 'framer-motion';
import styles from '@/styles/BlogNews.module.css';

export const BlogNews = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div id="blog" className={styles.column}>
        <h2 className={styles.title}>{t('blog.title')}</h2>
        <div className={styles.list}>
          {[1, 2].map((i) => (
            <motion.div key={i} whileHover={{ x: 5 }} className={styles.item}>
              <p className={styles.text}>{t(`blog.post${i}`)}</p>
              <span className={styles.link}>{t('blog.readMore')} →</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div id="news" className={styles.column}>
        <h2 className={styles.title}>{t('news.title')}</h2>
        <div className={styles.list}>
          {[1, 2].map((i) => (
            <motion.div key={i} whileHover={{ x: 5 }} className={styles.item}>
              <p className={styles.text}>{t(`news.item${i}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
