import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-24 md:py-36 bg-beige border-t border-beige-dark/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-charcoal">
            Words from our <span className="italic font-normal text-sage-dark inline-block pb-1">patients</span>.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto bg-ivory rounded-3xl p-8 sm:p-12 md:p-16 border border-beige-dark/60 shadow-floating relative">
          
          <Quote className="w-12 h-12 text-gold/30 absolute top-8 left-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 mb-8">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote Body */}
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal font-normal leading-relaxed italic mb-10 max-w-3xl">
                "{current.quote}"
              </p>

              {/* Patient Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/40 shadow-sm"
                />
                <div className="text-left">
                  <h3 className="font-serif text-xl font-semibold text-charcoal leading-none mb-1">
                    {current.name}
                  </h3>
                  <p className="text-xs text-sage-dark font-medium uppercase tracking-wider">
                    {current.treatment} · {current.location}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-beige-dark/40">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-charcoal' : 'w-2 bg-beige-dark'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full bg-beige border border-beige-dark/60 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory transition-colors active:scale-[0.98]"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full bg-beige border border-beige-dark/60 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory transition-colors active:scale-[0.98]"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
