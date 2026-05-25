import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
// Pages (to be implemented)
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Infrastructure } from './pages/Infrastructure';
import { Products } from './pages/Products';
import { Process } from './pages/Process';
import { Quality } from './pages/Quality';
import { Sustainability } from './pages/Sustainability';
import { Certifications } from './pages/Certifications';
import { Gallery } from './pages/Gallery';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="products" element={<Products />} />
          <Route path="process" element={<Process />} />
          <Route path="quality" element={<Quality />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}