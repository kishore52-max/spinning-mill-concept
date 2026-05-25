import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { QuoteIcon } from 'lucide-react';
const testimonials = [
{
  quote:
  "The consistency of BEST MILL's compact yarn has significantly reduced our loom stoppages. Their quality is truly world-class.",
  author: 'Alessandro Rossi',
  company: 'Milano Textiles',
  country: 'Italy'
},
{
  quote:
  "We've been sourcing organic cotton yarn from them for 5 years. The traceability and evenness are unmatched in the market.",
  author: 'Sarah Weber',
  company: 'EcoKnit GmbH',
  country: 'Germany'
},
{
  quote:
  'Prompt delivery, excellent packaging, and a highly professional team. They understand the exact needs of high-speed knitting.',
  author: 'Ahmet Yılmaz',
  company: 'Bosphorus Apparel',
  country: 'Turkey'
}];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-navy text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted Worldwide"
          subtitle="Hear from our international partners who rely on our yarn for their premium textile products."
          theme="dark"
          className="mb-16" />
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) =>
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
              duration: 0.6,
              delay: index * 0.2
            }}
            className="bg-white/5 border border-white/10 p-8 rounded-sm relative">
            
              <QuoteIcon className="w-10 h-10 text-gold/20 absolute top-6 right-6" />
              <p className="text-silver-light leading-relaxed mb-8 relative z-10 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center text-navy font-serif font-bold text-xl">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gold">
                    {item.company}, {item.country}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}