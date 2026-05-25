import React from 'react';
import { motion } from 'framer-motion';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  const themeClasses = {
    light: {
      title: 'text-navy',
      subtitle: 'text-silver',
      line: 'bg-gold'
    },
    dark: {
      title: 'text-off-white',
      subtitle: 'text-silver-light',
      line: 'bg-beige'
    }
  };
  return (
    <div className={`max-w-3xl ${alignmentClasses[align]} ${className}`}>
      <motion.div
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
          margin: '-100px'
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}>
        
        <h2
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 ${themeClasses[theme].title}`}>
          
          {title}
        </h2>

        <div
          className={`h-0.5 w-16 mb-6 ${alignmentClasses[align] === 'text-center mx-auto' ? 'mx-auto' : ''} ${themeClasses[theme].line}`} />
        

        {subtitle &&
        <p
          className={`text-lg md:text-xl font-light leading-relaxed ${themeClasses[theme].subtitle}`}>
          
            {subtitle}
          </p>
        }
      </motion.div>
    </div>);

}