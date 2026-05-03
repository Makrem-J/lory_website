'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Roadmap } from '@/components/Roadmap';
import { FAQ } from '@/components/FAQ';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Footer } from '@/components/Footer';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        <HowItWorks />
        <Roadmap />
        <FAQ />
        <div id="waitlist">
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
