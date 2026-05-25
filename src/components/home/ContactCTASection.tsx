import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
export function ContactCTASection() {
  return (
    <section className="py-24 bg-beige bg-noise relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
            duration: 0.6
          }}>
          
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium mb-6">
            Ready to discuss your yarn requirements?
          </h2>
          <p className="text-lg text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Our export team is ready to provide you with detailed
            specifications, samples, and competitive pricing for your market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button href="/products" variant="outline" size="lg">
              View Product Catalog
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

}