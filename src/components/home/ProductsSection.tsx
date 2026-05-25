import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const products = [
{
  name: 'Combed Yarn',
  range: 'Ne 20s - 80s',
  desc: 'Premium quality yarn with superior strength and evenness, ideal for high-end apparel.',
  image:
  'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1974&auto=format&fit=crop'
},
{
  name: 'Compact Yarn',
  range: 'Ne 30s - 100s',
  desc: 'Exceptionally smooth yarn with minimal hairiness, perfect for luxury shirting.',
  image:
  'https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=2070&auto=format&fit=crop'
},
{
  name: 'Organic Cotton',
  range: 'Ne 20s - 60s',
  desc: 'GOTS certified organic yarn, sustainably produced for eco-conscious brands.',
  image:
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop'
},
{
  name: 'Mélange Yarn',
  range: 'Ne 20s - 40s',
  desc: 'Beautifully blended dyed fibers creating a unique heathered effect.',
  image:
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop'
}];

export function ProductsSection() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Yarn Collection"
          subtitle="Crafted from the finest hand-picked cotton, our diverse range of yarns meets the specific needs of weavers and knitters worldwide."
          className="mb-16" />
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) =>
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group flex flex-col h-full">
            
              <div className="relative h-64 overflow-hidden">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-medium text-navy">
                  {product.range}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl text-navy font-medium mb-3">
                  {product.name}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>
                <Link
                to="/products"
                className="inline-flex items-center gap-2 text-navy font-medium text-sm hover:text-gold transition-colors mt-auto">
                
                  View Specifications
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 border border-navy text-navy hover:bg-navy hover:text-off-white transition-all duration-300 rounded-sm font-medium">
            
            Explore Full Catalog
          </Link>
        </div>
      </div>
    </section>);

}