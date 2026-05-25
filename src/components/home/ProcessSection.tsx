import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import {
  FactoryIcon,
  WindIcon,
  ScissorsIcon,
  LayersIcon,
  AlignCenterIcon,
  CircleDashedIcon,
  SettingsIcon,
  PackageIcon,
  BoxIcon } from
'lucide-react';
const steps = [
{
  icon: FactoryIcon,
  title: 'Procurement',
  desc: 'Sourcing premium raw cotton from certified farms.'
},
{
  icon: WindIcon,
  title: 'Blow Room',
  desc: 'Opening, cleaning, and mixing of cotton fibers.'
},
{
  icon: ScissorsIcon,
  title: 'Carding',
  desc: 'Untangling and aligning fibers into a continuous web.'
},
{
  icon: LayersIcon,
  title: 'Drawing',
  desc: 'Blending and evening out the sliver for consistency.'
},
{
  icon: AlignCenterIcon,
  title: 'Combing',
  desc: 'Removing short fibers to enhance strength and luster.'
},
{
  icon: CircleDashedIcon,
  title: 'Simplex',
  desc: 'Drafting sliver into roving and adding slight twist.'
},
{
  icon: SettingsIcon,
  title: 'Ring Frame',
  desc: 'Final spinning process to achieve desired yarn count.'
},
{
  icon: PackageIcon,
  title: 'Auto Cone',
  desc: 'Winding yarn onto cones and removing defects.'
},
{
  icon: BoxIcon,
  title: 'Packing',
  desc: 'Automated conditioning and export-ready packaging.'
}];

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-beige bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Manufacturing Process"
          subtitle="A seamless journey from raw fiber to finished yarn, monitored at every stage."
          className="mb-20" />
        

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-navy/10 -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px'
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1
                  }}
                  className="relative flex flex-col items-center text-center group">
                  
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gold/20 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 group-hover:border-gold transition-all duration-300">
                    <Icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-navy mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-charcoal/70 leading-relaxed hidden lg:block px-2">
                    {step.desc}
                  </p>
                  <p className="text-sm text-charcoal/70 leading-relaxed lg:hidden max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}