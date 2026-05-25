import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { TargetIcon, EyeIcon, AwardIcon, UsersIcon } from 'lucide-react';
const leaders = [
{
  name: 'Rajesh Kumar',
  role: 'Managing Director',
  image:
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
},
{
  name: 'Vikram Singh',
  role: 'Director of Operations',
  image:
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
},
{
  name: 'Anita Desai',
  role: 'Head of Quality',
  image:
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
},
{
  name: 'Marcus Chen',
  role: 'Global Sales Director',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
}];

export function About() {
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
      className="bg-off-white">
      
      <PageHeader
        title="Our Story"
        subtitle="Three decades of excellence in textile manufacturing."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" />
      

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-10 rounded-sm shadow-sm border border-gray-100">
            <TargetIcon className="w-10 h-10 text-gold mb-6" />
            <h2 className="font-serif text-3xl text-navy mb-4">Our Mission</h2>
            <p className="text-charcoal/70 leading-relaxed">
              To consistently manufacture and supply premium quality cotton yarn
              that exceeds customer expectations, while maintaining sustainable
              practices, fostering employee growth, and creating value for all
              stakeholders.
            </p>
          </div>
          <div className="bg-navy text-off-white p-10 rounded-sm shadow-sm">
            <EyeIcon className="w-10 h-10 text-gold mb-6" />
            <h2 className="font-serif text-3xl mb-4">Our Vision</h2>
            <p className="text-silver-light leading-relaxed">
              To be the globally preferred partner for high-quality textile
              yarns, recognized for our technological innovation, ethical
              business practices, and unwavering commitment to environmental
              stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-beige bg-noise">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-navy mb-4">Our Journey</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-navy/10">
            {[
            {
              year: '1989',
              title: 'Inception',
              desc: 'Founded with a modest capacity of 10,000 spindles.'
            },
            {
              year: '2005',
              title: 'Modernization',
              desc: 'Complete overhaul with European machinery and expansion to 40,000 spindles.'
            },
            {
              year: '2012',
              title: 'Global Reach',
              desc: 'Achieved Star Export House status, exporting to over 20 countries.'
            },
            {
              year: '2020',
              title: 'Sustainability Focus',
              desc: 'Commissioned 15MW solar plant and zero liquid discharge facility.'
            },
            {
              year: '2023',
              title: 'Present Day',
              desc: 'Operating 80,000 spindles with state-of-the-art compact spinning technology.'
            }].
            map((item, index) =>
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-beige bg-navy text-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                  <span className="text-gold font-bold text-xl mb-1 block">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/70">{item.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-navy mb-4">
            Leadership Team
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) =>
          <div key={index} className="group cursor-pointer">
              <div className="relative h-80 mb-4 overflow-hidden rounded-sm">
                <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              
              </div>
              <h3 className="font-serif text-xl text-navy font-medium">
                {leader.name}
              </h3>
              <p className="text-gold text-sm">{leader.role}</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>);

}