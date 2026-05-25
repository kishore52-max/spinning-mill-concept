import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheckIcon,
  ShieldCheckIcon,
  AwardIcon,
  CheckCircleIcon } from
'lucide-react';
const certs = [
{
  name: 'ISO 9001:2015',
  desc: 'Quality Management',
  icon: AwardIcon
},
{
  name: 'OEKO-TEX®',
  desc: 'Standard 100',
  icon: ShieldCheckIcon
},
{
  name: 'GOTS',
  desc: 'Global Organic Textile',
  icon: BadgeCheckIcon
},
{
  name: 'BCI',
  desc: 'Better Cotton Initiative',
  icon: CheckCircleIcon
}];

export function CertificationsSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="font-serif text-2xl text-navy font-medium mb-2">
              Global Standards
            </h3>
            <p className="text-sm text-silver">
              Certified for quality and sustainability.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {certs.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1
                  }}
                  className="flex flex-col items-center text-center p-4 rounded-sm hover:bg-beige/20 transition-colors">
                  
                  <Icon
                    className="w-10 h-10 text-navy mb-3 opacity-80"
                    strokeWidth={1.5} />
                  
                  <h4 className="font-medium text-navy text-sm mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-silver">{cert.desc}</p>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}