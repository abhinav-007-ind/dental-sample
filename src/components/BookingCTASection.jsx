import React from 'react';
import { Calendar, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BookingCTASection = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-32 bg-ivory-gradient border-t border-beige-dark/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal text-ivory rounded-3xl p-10 sm:p-16 md:p-20 text-center relative overflow-hidden shadow-floating border border-gold/30"
        >
          {/* Subtle background blur rings */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-sage/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-light border border-gold/30 text-xs font-semibold tracking-widest text-gold uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Begin Your Journey
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ivory leading-tight mb-6">
              Ready to love your <span className="italic font-normal text-gold inline-block pb-1">smile</span>?
            </h2>

            <p className="text-base sm:text-xl text-ivory/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Start with a personal consultation. Tell us what you want to change, and we'll help you understand what's possible with 3D digital planning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light rounded-full transition-all duration-300 shadow-lg active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 mr-3" />
                Book Consultation
              </button>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal-light hover:bg-charcoal-muted/30 border border-charcoal-muted/50 rounded-full transition-all duration-300 active:scale-[0.98]"
              >
                <PhoneCall className="w-4 h-4 mr-3 text-gold" />
                Call +91 98765 43210
              </a>
            </div>

            <p className="text-xs text-ivory/40 uppercase tracking-widest mt-8 font-light">
              No pressure · Digital smile simulation available on 1st visit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTASection;
