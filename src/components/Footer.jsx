import React from 'react';
import { Instagram, MapPin } from "lucide-react";
import { SITE_METADATA } from '../data/content';

const Footer = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-12 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-charcoal-muted/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-ivory text-charcoal flex items-center justify-center font-serif text-xl font-semibold border border-gold">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-semibold tracking-widest uppercase text-ivory">
                  Aurelia
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-gold font-medium">
                  Dental Clinic
                </span>
              </div>
            </a>

            <p className="text-serif text-lg italic text-ivory/80 mb-6 font-normal max-w-sm">
              "{SITE_METADATA.tagline}"
            </p>

            <p className="text-xs text-ivory/50 font-light leading-relaxed max-w-sm mb-6">
              A bespoke cosmetic and restorative dental practice dedicated to facial-driven aesthetics and gentle digital precision in Chennai.
            </p>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light rounded-full transition-colors shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Consultation
            </button>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-light text-ivory/70">
              <li><a href="#about" className="hover:text-ivory transition-colors">About Aurelia</a></li>
              <li><a href="#treatments" className="hover:text-ivory transition-colors">Treatments</a></li>
              <li><a href="#technology" className="hover:text-ivory transition-colors">Technology</a></li>
              <li><a href="#gallery" className="hover:text-ivory transition-colors">Smile Gallery</a></li>
              <li><a href="#reviews" className="hover:text-ivory transition-colors">Patient Reviews</a></li>
              <li><a href="#location" className="hover:text-ivory transition-colors">Contact & Hours</a></li>
            </ul>
          </div>

          {/* Treatments Menu */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Treatments
            </h4>
            <ul className="space-y-3 text-xs font-light text-ivory/70">
              <li><a href="#treatments" className="hover:text-ivory transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#treatments" className="hover:text-ivory transition-colors">Dental Implants</a></li>
              <li><a href="#treatments" className="hover:text-ivory transition-colors">Invisalign® Alignment</a></li>
              <li><a href="#treatments" className="hover:text-ivory transition-colors">Laser Teeth Whitening</a></li>
              <li><a href="#treatments" className="hover:text-ivory transition-colors">Preventive Dentistry</a></li>
              <li><a href="#treatments" className="hover:text-ivory transition-colors">The Aurelia Makeover</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Connect
            </h4>
            <div className="space-y-3 text-xs font-light text-ivory/70 mb-6">
              <p>123, Anna Salai, Chennai</p>
              <p>+91 98765 43210</p>
              <p>hello@aureliadental.com</p>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-charcoal-light border border-charcoal-muted/40 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-charcoal-light border border-charcoal-muted/40 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-charcoal-light border border-charcoal-muted/40 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/40 font-light">
          <div>
            © {new Date().getFullYear()} Aurelia Dental. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors uppercase tracking-widest font-semibold text-[10px]"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
