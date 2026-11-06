import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { TREATMENTS } from '../data/content';

const TreatmentsSection = ({ onSelectTreatment, onOpenBooking }) => {
  return (
    <section id="treatments" className="py-24 md:py-36 bg-ivory-card border-t border-beige-dark/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal">
              Comprehensive <span className="italic font-normal text-sage-dark inline-block pb-1">treatments</span>.
            </h2>
          </div>
          <p className="text-sm md:text-base text-charcoal-muted max-w-md font-light leading-relaxed">
            Every procedure is planned with digital precision and delivered with utmost comfort to preserve natural structure while enhancing aesthetics.
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectTreatment(treatment)}
              className="group cursor-pointer bg-ivory rounded-2xl p-6 border border-beige-dark/50 shadow-soft hover:shadow-floating hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Number & Arrow Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-2xl font-light text-gold-dark tracking-widest">
                    {treatment.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-beige border border-beige-dark/40 flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-ivory transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Treatment Image with Zoom */}
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 img-zoom-container bg-beige">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3 group-hover:text-sage-dark transition-colors">
                  {treatment.name}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed mb-6">
                  {treatment.shortDesc}
                </p>
              </div>

              {/* Card Footer info */}
              <div className="pt-4 border-t border-beige-dark/30 flex items-center justify-between text-xs font-medium text-sage-dark">
                <span>{treatment.duration}</span>
                <span className="text-gold-dark uppercase tracking-wider group-hover:underline">
                  Learn Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-full hover:bg-charcoal-light shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            Book Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;
