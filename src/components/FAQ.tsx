'use client';

import { useTranslation } from '@/translations/TranslationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from '@/styles/FAQ.module.css';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'q1', a: 'a1' },
    { q: 'q2', a: 'a2' },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t('faq.title')}</h2>
      <div className={styles.container}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.item}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={styles.question}
            >
              <span>{t(`faq.${faq.q}`)}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className={styles.answer}
                >
                  <p>{t(`faq.${faq.a}`)}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
