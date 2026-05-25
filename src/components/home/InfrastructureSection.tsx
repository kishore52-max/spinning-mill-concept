import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const machines = [
{
  name: 'Blow Room',
  spec: 'Trützschler (Germany) - Advanced cleaning',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop'
},
{
  name: 'Carding',
  spec: 'Rieter (Switzerland) - High precision',
  image:
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop'
},
{
  name: 'Ring Spinning',
  spec: 'Toyota (Japan) - 80,000 spindles',
  image:
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop'
},
{
  name: 'Auto Cone',
  spec: 'Murata (Japan) - Flawless winding',
  image:
  'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070&auto=format&fit=crop'
}];

export function InfrastructureSection() {
  return (
    <section className="py-24 md:py-32 bg-navy text-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            title="World-Class Infrastructure"
            subtitle="Equipped with the latest European and Japanese technology to ensure unparalleled yarn quality."
            align="left"
            theme="dark"
            className="mb-0" />
          
          <Link
            to="/infrastructure"
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors whitespace-nowrap shrink-0 group">
            
            View All Facilities
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((machine, index) =>
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
              delay: index * 0.1
            }}
            className="group relative h-[400px] rounded-sm overflow-hidden cursor-pointer">
            
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
              src={machine.image}
              alt={machine.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent z-20" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-30 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-8 h-0.5 bg-gold mb-4 transform origin-left transition-all duration-300 group-hover:w-12" />
                <h3 className="font-serif text-2xl font-medium mb-2">
                  {machine.name}
                </h3>
                <p className="text-silver-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {machine.spec}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}