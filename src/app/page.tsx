'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { Features } from '@/components/Features';
import { AppPreview } from '@/components/AppPreview';
import { HowItWorks } from '@/components/HowItWorks';
import { Roadmap } from '@/components/Roadmap';
import { BlogNews } from '@/components/BlogNews';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Footer } from '@/components/Footer';
import { GDPR } from '@/components/GDPR';
import { StickyMascot } from '@/components/StickyMascot';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <Hero />
        <SocialProof />
        <Features />
        <AppPreview />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="roadmap">
          <Roadmap />
        </div>
        <BlogNews />
        <div id="faq">
          <FAQ />
        </div>
        <Contact />
        <div id="waitlist">
          <WaitlistForm />
        </div>
      </main>
      <Footer />
      <GDPR />
      <StickyMascot />
    </div>
  );
}
