import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/home/HeroSection';
import { OverviewSection } from '../components/home/OverviewSection';
import { InfrastructureSection } from '../components/home/InfrastructureSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { QualitySection } from '../components/home/QualitySection';
import { SustainabilitySection } from '../components/home/SustainabilitySection';
import { CertificationsSection } from '../components/home/CertificationsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ContactCTASection } from '../components/home/ContactCTASection';
export function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.5
      }}>
      
      <HeroSection />
      <OverviewSection />
      <InfrastructureSection />
      <ProductsSection />
      <ProcessSection />
      <QualitySection />
      <SustainabilitySection />
      <CertificationsSection />
      <TestimonialsSection />
      <ContactCTASection />
    </motion.div>);

}