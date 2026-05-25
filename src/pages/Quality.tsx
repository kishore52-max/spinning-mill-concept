import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { QualitySection } from '../components/home/QualitySection';
export function Quality() {
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
        title="Quality Assurance"
        subtitle="Zero compromise. 100% perfection."
        image="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" />
      

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-sm shadow-sm text-center border border-gray-100">
            <div className="text-4xl font-serif text-navy mb-2">HVI</div>
            <div className="text-sm text-gold font-medium mb-4">
              Raw Material Testing
            </div>
            <p className="text-sm text-charcoal/70">
              100% testing of cotton bales for length, strength, micronaire, and
              color grade before mixing.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm text-center border border-gray-100">
            <div className="text-4xl font-serif text-navy mb-2">AFIS</div>
            <div className="text-sm text-gold font-medium mb-4">
              Process Control
            </div>
            <p className="text-sm text-charcoal/70">
              Monitoring neps, short fiber content, and trash at every
              preparatory stage.
            </p>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm text-center border border-gray-100">
            <div className="text-4xl font-serif text-navy mb-2">USTER</div>
            <div className="text-sm text-gold font-medium mb-4">
              Final Yarn Quality
            </div>
            <p className="text-sm text-charcoal/70">
              Ensuring yarn evenness, imperfections, and hairiness meet the top
              5% Uster Statistics.
            </p>
          </div>
        </div>
      </div>

      <QualitySection />
    </motion.div>);

}