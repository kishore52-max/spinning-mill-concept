import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { XIcon } from 'lucide-react';
const images = [
'https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=2070&auto=format&fit=crop',
'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop',
'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070&auto=format&fit=crop',
'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1974&auto=format&fit=crop',
'https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=2070&auto=format&fit=crop',
'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop',
'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop'];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
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
        title="Gallery"
        subtitle="A visual tour of our facilities and products."
        image="https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=2070&auto=format&fit=crop" />
      

      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index % 3 * 0.1
            }}
            className="relative h-64 overflow-hidden rounded-sm cursor-pointer group"
            onClick={() => setSelectedImg(src)}>
            
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg &&
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}>
          
            <button
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            onClick={() => setSelectedImg(null)}>
            
              <XIcon className="w-8 h-8" />
            </button>
            <motion.img
            initial={{
              scale: 0.9
            }}
            animate={{
              scale: 1
            }}
            src={selectedImg}
            alt="Enlarged gallery view"
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}