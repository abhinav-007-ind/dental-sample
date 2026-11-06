import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Technology', href: '#technology' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 glass-nav shadow-soft border-b border-beige-dark/30'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group active:scale-[0.98] transition-transform">
          <div className="w-9 h-9 rounded-full bg-charcoal text-ivory flex items-center justify-center font-serif text-lg font-semibold tracking-wider transition-transform duration-300 group-hover:scale-105 border border-gold/40">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-widest text-charcoal uppercase leading-none">
              Aurelia
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-sage-dark font-medium mt-1">
              Dental Clinic
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Action */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-full overflow-hidden transition-all duration-300 hover:bg-charcoal-light shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-gold-light" />
              Book Consultation
            </span>
            <span className="absolute inset-0 bg-sage opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-charcoal focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] z-40 bg-ivory/95 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between p-8 border-t border-beige-dark/30">
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl font-medium text-charcoal hover:text-sage transition-colors flex items-center justify-between py-2 border-b border-beige-dark/20"
              >
                {link.name}
                <ArrowRight className="w-5 h-5 text-gold" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-full flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-gold-light" />
              Book Consultation
            </button>
            <p className="text-xs text-center text-charcoal-muted tracking-wider">
              Mon–Sat · 9:00 AM–7:00 PM | Chennai
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
