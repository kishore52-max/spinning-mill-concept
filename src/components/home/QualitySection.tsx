import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import {
  MicroscopeIcon,
  ActivityIcon,
  ShieldCheckIcon,
  TargetIcon,
  ZapIcon } from
'lucide-react';
const pillars = [
{
  icon: MicroscopeIcon,
  title: 'Lab Testing',
  desc: 'HVI testing for raw cotton selection.'
},
{
  icon: ActivityIcon,
  title: 'USTER Control',
  desc: 'Online monitoring for evenness and imperfections.'
},
{
  icon: ShieldCheckIcon,
  title: 'Contamination Control',
  desc: 'Vision shield technology to eliminate foreign matter.'
},
{
  icon: ZapIcon,
  title: 'Strength Testing',
  desc: 'Tensile testing to ensure high breaking strength.'
},
{
  icon: TargetIcon,
  title: 'Evenness Testing',
  desc: 'Spectrogram analysis for fault-free fabric appearance.'
}];

export function QualitySection() {
  return (
    <section className="py-24 md:py-32 bg-navy text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              title="Uncompromising Quality"
              subtitle="Our dedicated quality assurance labs operate 24/7, ensuring every cone meets stringent international parameters."
              align="left"
              theme="dark"
              className="mb-12" />
            

            <div className="space-y-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1
                    }}
                    className="flex items-start gap-4">
                    
                    <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-medium mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-silver-light text-sm">{pillar.desc}</p>
                    </div>
                  </motion.div>);

              })}
            </div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="relative h-[600px] rounded-sm overflow-hidden">
            
            <img
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop"
              alt="Quality Control Lab"
              className="absolute inset-0 w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />

            {/* Overlay Badge */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm max-w-xs">
              <div className="text-gold font-serif text-4xl mb-2">100%</div>
              <div className="text-sm text-white/90">
                Uster Statistics top 5% benchmark consistently achieved across
                all counts.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}