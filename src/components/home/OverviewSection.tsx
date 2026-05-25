import React from 'react';
import { motion } from 'framer-motion';
import { StatCounter } from '../shared/StatCounter';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function OverviewSection() {
  return (
    <section className="py-24 md:py-32 bg-beige bg-noise relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}>
            
            <h2 className="font-serif text-4xl md:text-5xl text-navy font-medium mb-6 leading-tight">
              A Legacy of Quality in Every Thread.
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" />
            <div className="space-y-6 text-charcoal/80 text-lg font-light leading-relaxed mb-10">
              <p>
                Founded on the principles of integrity and innovation, BEST MILL
                has grown into one of the most trusted names in the global
                textile industry. We specialize in producing premium quality
                cotton yarn that meets the exacting standards of international
                buyers.
              </p>
              <p>
                Our state-of-the-art manufacturing facilities combine
                traditional craftsmanship with cutting-edge European machinery,
                ensuring consistency, strength, and perfection in every cone we
                produce.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors group">
              
              Discover Our History
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
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
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="grid grid-cols-2 gap-x-8 gap-y-12 bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-white/50 shadow-sm">
            
            <StatCounter end={35} suffix="+" label="Years of Experience" />
            <StatCounter end={80000} suffix="+" label="Spindles Capacity" />
            <StatCounter end={25000} suffix=" MT" label="Annual Production" />
            <StatCounter end={40} suffix="+" label="Export Countries" />
          </motion.div>
        </div>
      </div>
    </section>);

}