import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
const navLinks = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'About Us',
  path: '/about'
},
{
  name: 'Capabilities',
  path: '#',
  dropdown: [
  {
    name: 'Infrastructure',
    path: '/infrastructure'
  },
  {
    name: 'Manufacturing Process',
    path: '/process'
  },
  {
    name: 'Quality Assurance',
    path: '/quality'
  }]

},
{
  name: 'Products',
  path: '/products'
},
{
  name: 'Sustainability',
  path: '/sustainability'
},
{
  name: 'Certifications',
  path: '/certifications'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  // Check if current page is a dark page at the top (like Home hero)
  const isDarkHeroPage = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);
  const navBgClass = isScrolled ?
  'bg-navy/95 backdrop-blur-md shadow-lg py-4' :
  isDarkHeroPage ?
  'bg-transparent py-6' :
  'bg-navy py-6';
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="font-serif text-navy font-bold text-xl leading-none">
                B
              </span>
            </div>
            <span className="font-serif text-2xl font-semibold text-off-white tracking-wider">
              BEST MILL
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() =>
              link.dropdown && setActiveDropdown(link.name)
              }
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}>
              
                {link.dropdown ?
              <button className="flex items-center gap-1 text-sm font-medium text-off-white/90 hover:text-gold transition-colors py-2">
                    {link.name}
                    <ChevronDownIcon className="w-4 h-4" />
                  </button> :

              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors py-2 ${location.pathname === link.path ? 'text-gold' : 'text-off-white/90 hover:text-gold'}`}>
                
                    {link.name}
                  </Link>
              }

                {/* Dropdown */}
                {link.dropdown &&
              <AnimatePresence>
                    {activeDropdown === link.name &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: 10
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100">
                  
                        <div className="py-2">
                          {link.dropdown.map((dropLink) =>
                    <Link
                      key={dropLink.name}
                      to={dropLink.path}
                      className="block px-4 py-2.5 text-sm text-charcoal hover:bg-beige/30 hover:text-navy transition-colors">
                      
                              {dropLink.name}
                            </Link>
                    )}
                        </div>
                      </motion.div>
                }
                  </AnimatePresence>
              }
              </div>
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button
                href="/contact"
                variant={isScrolled || !isDarkHeroPage ? 'secondary' : 'ghost'}
                size="sm">
                
                Inquire Now
              </Button>
            </div>
            <button
              className="lg:hidden text-off-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              
              {mobileMenuOpen ?
              <XIcon className="w-6 h-6" /> :

              <MenuIcon className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-navy border-t border-white/10 overflow-hidden">
          
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <div key={link.name}>
                  {link.dropdown ?
              <div className="space-y-3">
                      <div className="text-off-white/50 text-xs font-semibold uppercase tracking-wider px-2">
                        {link.name}
                      </div>
                      <div className="flex flex-col gap-2 pl-4 border-l border-white/10 ml-2">
                        {link.dropdown.map((dropLink) =>
                  <Link
                    key={dropLink.name}
                    to={dropLink.path}
                    className="text-off-white/90 text-sm py-1">
                    
                            {dropLink.name}
                          </Link>
                  )}
                      </div>
                    </div> :

              <Link
                to={link.path}
                className="block text-off-white font-medium text-lg px-2">
                
                      {link.name}
                    </Link>
              }
                </div>
            )}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Button href="/contact" variant="secondary" className="w-full">
                  Inquire Now
                </Button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}