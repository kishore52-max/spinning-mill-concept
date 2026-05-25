import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { SunIcon, DropletsIcon, LeafIcon, RecycleIcon } from 'lucide-react';
const initiatives = [
{
  icon: SunIcon,
  title: 'Solar Energy',
  desc: '60% of our energy needs are met through our 15MW captive solar power plant.'
},
{
  icon: DropletsIcon,
  title: 'Zero Liquid Discharge',
  desc: '100% of wastewater is treated and recycled back into the humidification plant.'
},
{
  icon: LeafIcon,
  title: 'Organic Sourcing',
  desc: 'Partnering directly with farmers for traceable, pesticide-free organic cotton.'
},
{
  icon: RecycleIcon,
  title: 'Waste Management',
  desc: 'Cotton waste is repurposed for open-end spinning, ensuring zero landfill impact.'
}];

export function SustainabilitySection() {
  return (
    <section className="py-24 md:py-32 bg-[#F4F1EA] relative overflow-hidden">
      {/* Decorative leaf background hint */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Committed to Tomorrow"
          subtitle="Sustainability is woven into our operations. We believe in manufacturing that respects the planet."
          className="mb-16" />
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30
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
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="bg-white p-8 rounded-sm shadow-sm border border-[#E8E5DE] hover:border-gold/50 transition-colors group">
                
                <div className="w-14 h-14 rounded-full bg-[#F4F1EA] flex items-center justify-center mb-6 group-hover:bg-navy transition-colors">
                  <Icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-medium text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}