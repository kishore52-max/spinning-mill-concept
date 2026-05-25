import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { MapPinIcon, BriefcaseIcon, ClockIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
const jobs = [
{
  title: 'Production Engineer',
  type: 'Full-time',
  location: 'Coimbatore, India',
  desc: 'Oversee daily spinning operations, optimize machine efficiency, and manage shift personnel.'
},
{
  title: 'Quality Analyst',
  type: 'Full-time',
  location: 'Coimbatore, India',
  desc: 'Operate USTER and HVI testing equipment, maintain quality logs, and ensure compliance with standards.'
},
{
  title: 'Mechanical Maintenance',
  type: 'Full-time',
  location: 'Coimbatore, India',
  desc: 'Perform preventive and breakdown maintenance on Rieter and Toyota spinning machinery.'
},
{
  title: 'Export Sales Executive',
  type: 'Full-time',
  location: 'Coimbatore / Remote',
  desc: 'Manage international client accounts, handle export documentation, and drive new business.'
},
{
  title: 'HR Manager',
  type: 'Full-time',
  location: 'Coimbatore, India',
  desc: 'Manage recruitment, employee welfare, compliance, and training programs for the mill.'
},
{
  title: 'Trainee Operator',
  type: 'Apprenticeship',
  location: 'Coimbatore, India',
  desc: 'Learn machine operations under senior guidance. Accommodation provided.'
}];

export function Careers() {
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
        title="Careers"
        subtitle="Join a team dedicated to textile excellence."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" />
      

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl text-navy mb-4">
            Why Work With Us?
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            At BEST MILL, we believe our people are our greatest asset. We offer
            a safe, modern working environment, continuous training, competitive
            benefits, and opportunities for career advancement in the global
            textile industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) =>
          <div
            key={index}
            className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:border-gold transition-colors flex flex-col h-full">
            
              <h3 className="font-serif text-2xl text-navy mb-3">
                {job.title}
              </h3>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-1 text-xs text-silver font-medium uppercase tracking-wider">
                  <BriefcaseIcon className="w-3.5 h-3.5" /> {job.type}
                </div>
                <div className="flex items-center gap-1 text-xs text-silver font-medium uppercase tracking-wider">
                  <MapPinIcon className="w-3.5 h-3.5" /> {job.location}
                </div>
              </div>

              <p className="text-charcoal/70 text-sm mb-8 flex-grow">
                {job.desc}
              </p>

              <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto self-start">
              
                Apply Now
              </Button>
            </div>
          )}
        </div>

        <div className="mt-16 bg-beige p-8 text-center rounded-sm">
          <h3 className="font-serif text-xl text-navy mb-2">
            Don't see a matching role?
          </h3>
          <p className="text-sm text-charcoal/70 mb-4">
            Send your resume to hr@bestmill.com and we'll keep you in mind for
            future openings.
          </p>
        </div>
      </div>
    </motion.div>);

}