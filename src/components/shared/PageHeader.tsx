import React from 'react';
import { motion } from 'framer-motion';
interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}
export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-navy pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}>
          
          <h1 className="font-serif text-4xl md:text-6xl text-off-white font-medium mb-4">
            {title}
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-lg text-silver-light font-light">{subtitle}</p>
        </motion.div>
      </div>
    </div>);

}