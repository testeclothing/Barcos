import React, { useState, useEffect } from 'react';
import { Menu, X, Aperture } from 'lucide-react';
import Button from './Button';

const navItems = [
  { label: 'Method', href: '#workflow' },
  { label: 'Capabilities', href: '#core' },
  { label: 'Commission', href: '#pricing' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 bg-neon flex items-center justify-center rounded-sm">
                <Aperture className="w-5 h-5 text-dark" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-dark leading-none">
                    MVS
                </span>
            </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-dark transition-colors"
              >
                {item.label}
              </a>
            ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
            <Button variant="outline" onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}>
                Studio Access
            </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-dark z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-4xl font-display font-bold text-dark hover:text-neon transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
             <button 
                onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold uppercase tracking-widest bg-neon text-dark px-8 py-4 mt-8"
            >
                Start Project
            </button>
        </div>
    </div>
    </>
  );
};

export default Navbar;