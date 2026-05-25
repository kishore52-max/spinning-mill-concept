import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon } from
'lucide-react';
import { Button } from '../components/ui/Button';
export function Contact() {
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success'>(
    'idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      console.log('Form submitted successfully');
    }, 1500);
  };
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
        title="Contact Us"
        subtitle="Get in touch with our export team for inquiries and partnerships."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" />
      

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">
                Global Headquarters
              </h2>
              <p className="text-charcoal/70 mb-8">
                Our dedicated export division is available to assist you with
                product specifications, sampling, and logistics.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center shrink-0 text-gold">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">
                    Factory & Office
                  </h4>
                  <p className="text-sm text-charcoal/70">
                    123 Textile Park, Industrial Area Phase II,
                    <br />
                    Coimbatore, Tamil Nadu 641014, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center shrink-0 text-gold">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Phone</h4>
                  <p className="text-sm text-charcoal/70">
                    +91 98765 43210 (Export Sales)
                    <br />
                    +91 422 1234567 (Board)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center shrink-0 text-gold">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Email</h4>
                  <p className="text-sm text-charcoal/70">
                    exports@bestmill.com
                    <br />
                    info@bestmill.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-sm shadow-sm flex items-center justify-center shrink-0 text-gold">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-navy mb-1">Business Hours</h4>
                  <p className="text-sm text-charcoal/70">
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100">
            <h3 className="font-serif text-2xl text-navy mb-6">
              Send an Inquiry
            </h3>

            {formStatus === 'success' ?
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-sm text-center">
              
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SendIcon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-medium mb-2">
                  Message Sent Successfully!
                </h4>
                <p>
                  Thank you for reaching out. Our export team will get back to
                  you within 24 hours.
                </p>
                <button
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-navy font-medium hover:text-gold transition-colors">
                
                  Send another message
                </button>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                    required
                    type="text"
                    className="w-full bg-off-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                    required
                    type="email"
                    className="w-full bg-off-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                  
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Company Name
                    </label>
                    <input
                    type="text"
                    className="w-full bg-off-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                  
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Country
                    </label>
                    <input
                    type="text"
                    className="w-full bg-off-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                  
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Product Interest
                  </label>
                  <select className="w-full bg-off-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors">
                    <option>Select a product...</option>
                    <option>Carded Yarn</option>
                    <option>Combed Yarn</option>
                    <option>Compact Yarn</option>
                    <option>Organic Cotton Yarn</option>
                    <option>Mélange Yarn</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                  required
                  rows={4}
                  className="w-full bg-off-white border border-gray-200 rounded-sm px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none">
                </textarea>
                </div>

                <Button
                type="submit"
                variant="primary"
                className="w-full md:w-auto"
                disabled={formStatus === 'submitting'}>
                
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            }
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-navy text-white text-center p-4">
          <div>
            <MapPinIcon className="w-12 h-12 mx-auto mb-4 text-gold opacity-80" />
            <h3 className="font-serif text-2xl mb-2">Visit Our Facility</h3>
            <p className="text-silver-light">
              Interactive Map Integration Placeholder
            </p>
          </div>
        </div>
      </section>
    </motion.div>);

}