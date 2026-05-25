import React from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { CertificationsSection } from '../components/home/CertificationsSection';
import {
  ShieldCheckIcon,
  AwardIcon,
  CheckCircleIcon,
  BadgeCheckIcon } from
'lucide-react';
const detailedCerts = [
{
  icon: AwardIcon,
  title: 'ISO 9001:2015',
  desc: 'Our Quality Management System is certified to ISO 9001:2015 standards, ensuring consistent quality in our manufacturing processes and customer service.'
},
{
  icon: ShieldCheckIcon,
  title: 'OEKO-TEX® Standard 100',
  desc: 'All our yarns are tested for harmful substances and are certified safe for human health, meeting the strict requirements of OEKO-TEX® Annex 4 for baby articles.'
},
{
  icon: BadgeCheckIcon,
  title: 'GOTS (Global Organic Textile Standard)',
  desc: 'We are certified to process and trade organic cotton yarns, ensuring environmental and social compliance throughout the supply chain.'
},
{
  icon: CheckCircleIcon,
  title: 'BCI (Better Cotton Initiative)',
  desc: 'As a proud member of BCI, we support sustainable cotton farming practices that are better for the people who produce it and better for the environment.'
}];

export function Certifications() {
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
        title="Certifications"
        subtitle="Independently verified for quality, safety, and sustainability."
        image="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" />
      

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {detailedCerts.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 flex gap-6">
                
                <div className="w-16 h-16 bg-beige/30 rounded-full flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-navy mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>);

          })}
        </div>
      </div>

      <CertificationsSection />
    </motion.div>);

}