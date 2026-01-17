import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Workflow from './components/Workflow';
import ListingDemo from './components/ListingDemo';
import Features from './components/Features';
import DigitalStaging from './components/DigitalStaging';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-dark font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ListingDemo />
        </>
        <Workflow />
        <DigitalStaging />
        <Gallery />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
