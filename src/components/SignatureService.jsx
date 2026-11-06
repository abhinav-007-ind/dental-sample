import React from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SIGNATURE_STEPS } from '../data/content';

const SignatureService = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-36 bg-charcoal text-ivory relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-light border border-gold/30 text-xs font-semibold tracking-widest text-gold uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Signature Service
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-ivory leading-tight mb-6">
            THE AURELIA SMILE MAKEOVER
          </h2>

          <p className="text-base sm:text-xl text-ivory/70 font-light leading-relaxed">
            A personalized smile transformation combining cosmetic artistry, precision dentistry, and advanced digital planning.
          </p>
        </div>

        {/* Full-width Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-20 border border-gold/20 shadow-floating"
        >
          <div className="aspect-[21/9] min-h-[320px] relative">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80"
              alt="The Aurelia Smile Makeover clinical digital planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold mb-1 block">
                  Artistry Meets Science
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-ivory">
                  Facial-driven aesthetic harmony
                </h3>
              </div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light rounded-full transition-all duration-300 self-start md:self-auto active:scale-[0.98]"
              >
                Schedule Makeover Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SIGNATURE_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-charcoal-light/60 backdrop-blur-sm p-8 rounded-2xl border border-charcoal-muted/30 hover:border-gold/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl font-light text-gold block mb-4">
                  {item.step}
                </span>
                <h4 className="font-serif text-2xl font-semibold text-ivory mb-3">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal-muted/30 flex items-center gap-2 text-xs text-gold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Step {idx + 1} of 4</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureService;
