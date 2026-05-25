import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { ProcessSection } from '../components/home/ProcessSection';
export function Process() {
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
        title="Manufacturing Process"
        subtitle="From raw fiber to finished yarn, precision at every step."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" />
      

      {/* Reuse the home page component for the timeline, but we can add more context above/below it */}
      <div className="py-16 max-w-4xl mx-auto px-4 text-center">
        <p className="text-lg text-charcoal/80 font-light leading-relaxed">
          At BEST MILL, yarn manufacturing is a blend of art and science. We
          maintain strict atmospheric controls in our humidification plants to
          ensure the cotton fibers behave optimally during drafting and
          spinning. Every stage is monitored by centralized data systems to
          prevent deviations.
        </p>
      </div>

      <ProcessSection />
    </motion.div>);

}