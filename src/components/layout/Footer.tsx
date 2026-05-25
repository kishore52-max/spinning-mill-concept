import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon } from
'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-navy text-off-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="font-serif text-navy font-bold text-xl leading-none">
                  B
                </span>
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wider">
                BEST MILL
              </span>
            </Link>
            <p className="text-silver-light text-sm leading-relaxed">
              Premium cotton yarn manufacturing excellence. Delivering
              world-class textile solutions to international markets with a
              commitment to quality, sustainability, and innovation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
              'About Us',
              'Products',
              'Infrastructure',
              'Sustainability',
              'Careers',
              'Gallery'].
              map((item) =>
              <li key={item}>
                  <Link
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="text-silver-light hover:text-gold transition-colors text-sm flex items-center gap-2 group">
                  
                    <ArrowRightIcon className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-silver-light text-sm">
                <MapPinIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  123 Textile Park, Industrial Area Phase II,
                  <br />
                  Coimbatore, Tamil Nadu 641014, India
                </span>
              </li>
              <li className="flex items-center gap-3 text-silver-light text-sm">
                <PhoneIcon className="w-5 h-5 text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-silver-light text-sm">
                <MailIcon className="w-5 h-5 text-gold shrink-0" />
                <span>exports@bestmill.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6">Newsletter</h4>
            <p className="text-silver-light text-sm mb-4">
              Subscribe to receive updates on our latest products and industry
              news.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder:text-silver focus:outline-none focus:border-gold transition-colors"
                required />
              
              <button
                type="submit"
                className="w-full bg-gold text-navy font-medium py-3 rounded-sm hover:bg-white transition-colors text-sm">
                
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-silver text-xs">
            &copy; {currentYear} Best Mill Textiles Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-silver text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}