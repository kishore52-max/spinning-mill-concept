import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/1234567890" // Placeholder number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center group"
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      initial={{
        opacity: 0,
        y: 50
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        delay: 1,
        duration: 0.5
      }}>
      
      <MessageCircleIcon className="w-7 h-7" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-charcoal text-sm font-medium py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with Sales
      </span>
    </motion.a>);

}