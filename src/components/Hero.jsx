import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ivory flex items-center">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beige border border-beige-dark/50 text-xs font-semibold tracking-widest text-sage-dark uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>Exceptional Dentistry. Naturally Confident.</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-charcoal leading-[1.08] mb-6">
              Your best smile, <br />
              <span className="italic font-normal text-sage-dark inline-block pb-1">beautifully</span> designed.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-xl font-light leading-relaxed mb-10">
              Advanced dentistry with a personal touch. Experience thoughtful care, modern digital technology, and aesthetic results engineered entirely around you.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-full shadow-soft hover:bg-charcoal-light transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-3 text-gold-light" />
              </button>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal bg-beige hover:bg-beige-dark/40 rounded-full border border-beige-dark/60 transition-all duration-300 active:scale-[0.98]"
              >
                Explore Treatments
              </a>
            </div>

            {/* Key Value Micro-list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-6 border-t border-beige-dark/40 w-full max-w-lg">
              <div>
                <span className="block text-2xl font-serif font-semibold text-charcoal">99.4%</span>
                <span className="text-xs text-charcoal-muted uppercase tracking-wider">Patient Satisfaction</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-semibold text-charcoal">3D Scanning</span>
                <span className="text-xs text-charcoal-muted uppercase tracking-wider">No Messy Impressions</span>
              </div>
              <div>
                <span className="block text-2xl font-serif font-semibold text-charcoal">Bespoke</span>
                <span className="text-xs text-charcoal-muted uppercase tracking-wider">Veneer Artistry</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual & Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Image Container with subtle frame border */}
            <div className="relative rounded-3xl p-3 bg-ivory-card border border-beige-dark/40 shadow-soft">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/hero_portrait.jpg"
                  alt="Aurelia Dental natural beautiful smile"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Subtle Floating Appointment / Info Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-8 bg-ivory/95 backdrop-blur-md p-5 rounded-2xl border border-beige-dark/60 shadow-floating max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sage-dark"></span>
                </span>
                <span className="text-xs font-semibold tracking-wider text-charcoal uppercase">
                  Accepting new patients
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-charcoal-muted">
                <Clock className="w-3.5 h-3.5 text-gold-dark" />
                <span>Mon–Sat · 9:00 AM–7:00 PM</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
