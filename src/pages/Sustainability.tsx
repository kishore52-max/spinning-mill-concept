import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { SustainabilitySection } from '../components/home/SustainabilitySection';
export function Sustainability() {
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
      className="bg-off-white min-h-screen">
      
      <PageHeader
        title="Sustainability"
        subtitle="Spinning a greener future for the next generation."
        image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop" />
      

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl text-navy mb-6">
              Our Green Commitment
            </h2>
            <p className="text-charcoal/80 leading-relaxed text-lg font-light mb-6">
              As a responsible manufacturer, we recognize that the textile
              industry has a significant environmental footprint. We have taken
              aggressive steps to minimize our impact through renewable energy
              adoption, water conservation, and sustainable sourcing.
            </p>
            <p className="text-charcoal/80 leading-relaxed text-lg font-light">
              Our goal is to achieve carbon neutrality by 2030, and we are well
              on our way with our recent investments in wind and solar power
              infrastructure.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
              alt="Solar Panels"
              className="w-full h-[400px] object-cover rounded-sm shadow-lg" />
            
          </div>
        </div>
      </div>

      <SustainabilitySection />
    </motion.div>);

}