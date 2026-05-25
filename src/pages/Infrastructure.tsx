import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
const facilities = [
{
  title: 'Blow Room & Carding',
  desc: 'Our preparation department is equipped with the latest Trützschler blow room lines and Rieter carding machines. This ensures gentle opening of fibers, efficient trash removal, and perfect sliver formation, setting the foundation for high-quality yarn.',
  image:
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  specs: [
  'Trützschler Blow Room',
  'Rieter C70 Cards',
  'Vision Shield Contamination Sorter']

},
{
  title: 'Combing & Drawing',
  desc: 'To produce premium combed yarns, we utilize advanced Rieter combers that effectively remove short fibers and neps. The subsequent drawing process guarantees excellent blending and sliver evenness.',
  image:
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
  specs: [
  'Rieter E86 Combers',
  'Rieter RSB D50 Draw Frames',
  'Auto-leveling Technology']

},
{
  title: 'Ring Spinning',
  desc: 'The heart of our mill features 80,000 spindles of Toyota and LMW ring frames, equipped with compact spinning attachments. This allows us to produce yarn with minimal hairiness, high strength, and superior luster.',
  image:
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop',
  specs: [
  '80,000 Total Spindles',
  'Compact Attachments',
  'Individual Spindle Monitoring']

},
{
  title: 'Auto Coning & Conditioning',
  desc: 'Final winding is performed on Murata QPRO EX auto-coners with Uster Quantum 3 clearers, ensuring fault-free packages. Yarns are then conditioned using Xorella technology to set the twist and optimize moisture content.',
  image:
  'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070&auto=format&fit=crop',
  specs: [
  'Murata Auto Coners',
  'Uster Quantum 3 Clearers',
  'Xorella Yarn Conditioning']

}];

export function Infrastructure() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      className="bg-off-white min-h-screen">
      
      <PageHeader
        title="Infrastructure"
        subtitle="State-of-the-art European and Japanese technology powering our production."
        image="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop" />
      

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {facilities.map((facility, index) =>
        <div
          key={index}
          className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
          
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] rounded-sm overflow-hidden shadow-lg">
                <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover" />
              
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="font-serif text-3xl text-navy">
                {facility.title}
              </h2>
              <div className="w-12 h-0.5 bg-gold" />
              <p className="text-charcoal/80 leading-relaxed text-lg font-light">
                {facility.desc}
              </p>
              <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm mt-6">
                <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
                  Key Equipment
                </h4>
                <ul className="space-y-2">
                  {facility.specs.map((spec, i) =>
                <li
                  key={i}
                  className="flex items-center gap-2 text-charcoal/70 text-sm">
                  
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {spec}
                    </li>
                )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>);

}