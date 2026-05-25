import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '../ui/Button';
export function HeroSection() {
  // Generate random particles for the cotton dust effect
  const particles = Array.from({
    length: 20
  }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{
            scale: 1.1
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut'
          }}
          className="w-full h-full">
          
          <img
            src="https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=2070&auto=format&fit=crop"
            alt="Textile Factory Interior"
            className="w-full h-full object-cover opacity-40" />
          
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy"></div>
      </div>

      {/* Floating Cotton Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p) =>
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/30 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`
          }}
          animate={{
            y: [0, -500],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear'
          }} />

        )}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-6 block">
            Established 1989
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-off-white font-medium tracking-tight mb-8 text-balance mx-auto max-w-5xl">
            Premium Cotton Yarn <br className="hidden md:block" />
            <span className="italic text-white/90">
              Manufacturing Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-silver-light max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Delivering world-class textile solutions through advanced
            technology, uncompromising quality control, and sustainable
            practices for global markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products" variant="secondary" size="lg">
              Explore Products
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
        
        <span className="text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <ChevronDownIcon className="w-5 h-5" />
      </motion.div>
    </section>);

}