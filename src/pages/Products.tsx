import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeader } from '../components/shared/PageHeader';
import { XIcon } from 'lucide-react';
const categories = ['All', 'Carded', 'Combed', 'Compact', 'Organic', 'Mélange'];
const productsData = [
{
  id: 1,
  name: '100% Cotton Carded Yarn',
  category: 'Carded',
  count: 'Ne 20s to 40s',
  application: 'Knitting & Weaving',
  packaging: 'Carton / Pallet',
  image:
  'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1974&auto=format&fit=crop'
},
{
  id: 2,
  name: '100% Cotton Combed Yarn',
  category: 'Combed',
  count: 'Ne 20s to 80s',
  application: 'High-end Knitting, Shirting',
  packaging: 'Carton / Pallet',
  image:
  'https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=2070&auto=format&fit=crop'
},
{
  id: 3,
  name: 'Compact Combed Yarn',
  category: 'Compact',
  count: 'Ne 30s to 100s',
  application: 'Premium Shirting, Fine Knitting',
  packaging: 'Pallet',
  image:
  'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop'
},
{
  id: 4,
  name: 'GOTS Organic Yarn',
  category: 'Organic',
  count: 'Ne 20s to 60s',
  application: 'Eco-friendly Apparel, Baby Wear',
  packaging: 'Carton',
  image:
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop'
},
{
  id: 5,
  name: 'Cotton Mélange Yarn',
  category: 'Mélange',
  count: 'Ne 20s to 40s',
  application: 'Fashion Apparel, Hosiery',
  packaging: 'Carton',
  image:
  'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070&auto=format&fit=crop'
},
{
  id: 6,
  name: 'Slub Yarn',
  category: 'Carded',
  count: 'Ne 10s to 30s',
  application: 'Denim, Casual Wear',
  packaging: 'Carton',
  image:
  'https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=2070&auto=format&fit=crop'
}];

export function Products() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const filteredProducts =
  activeFilter === 'All' ?
  productsData :
  productsData.filter((p) => p.category === activeFilter);
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
        title="Yarn Collection"
        subtitle="Precision engineered yarns for every textile application."
        image="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?q=80&w=1974&auto=format&fit=crop" />
      

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === cat ? 'bg-navy text-white' : 'bg-white text-navy border border-gray-200 hover:border-navy'}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <AnimatePresence>
            {filteredProducts.map((product) =>
            <motion.div
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}
              key={product.id}
              className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProduct(product)}>
              
                <div className="h-64 overflow-hidden relative">
                  <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                
                  <div className="absolute top-4 right-4 bg-navy text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-navy font-medium mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-charcoal/70 mb-4">
                    Count Range:{' '}
                    <span className="font-medium text-navy">
                      {product.count}
                    </span>
                  </p>
                  <button className="text-gold text-sm font-medium hover:text-navy transition-colors">
                    View Full Specs &rarr;
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct &&
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
            <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 50
            }}
            className="bg-white w-full max-w-3xl rounded-sm overflow-hidden shadow-2xl relative flex flex-col md:flex-row">
            
              <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white p-2 rounded-full transition-colors">
              
                <XIcon className="w-5 h-5 text-navy" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover" />
              
              </div>

              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                <div className="text-xs font-bold tracking-wider text-gold uppercase mb-2">
                  {selectedProduct.category}
                </div>
                <h3 className="font-serif text-3xl text-navy mb-6">
                  {selectedProduct.name}
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-xs text-silver uppercase tracking-wider mb-1">
                      Count Range
                    </div>
                    <div className="text-charcoal font-medium">
                      {selectedProduct.count}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-silver uppercase tracking-wider mb-1">
                      Ideal Application
                    </div>
                    <div className="text-charcoal font-medium">
                      {selectedProduct.application}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-silver uppercase tracking-wider mb-1">
                      Standard Packaging
                    </div>
                    <div className="text-charcoal font-medium">
                      {selectedProduct.packaging}
                    </div>
                  </div>
                </div>

                <a
                href="/contact"
                className="inline-block text-center bg-navy text-white py-3 px-6 rounded-sm hover:bg-gold transition-colors font-medium">
                
                  Request Sample
                </a>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </motion.div>);

}