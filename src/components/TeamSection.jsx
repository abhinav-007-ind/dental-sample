import React from 'react';
import { Award, GraduationCap, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TeamSection = ({ onOpenBooking }) => {
  const credentials = [
    "DDS — Cosmetic & Restorative Dentistry",
    "Fellow, International Academy of Dental Aesthetics",
    "Certified Invisalign® Master Provider",
    "10+ Years of Bespoke Smile Transformations"
  ];

  return (
    <section id="team" className="py-24 md:py-36 bg-ivory border-t border-beige-dark/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-3 bg-beige/60 border border-beige-dark/50 shadow-soft">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden img-zoom-container">
                <img
                  src="/images/dr_ananya_rao.jpg"
                  alt="Dr. Ananya Rao Founder and Cosmetic Dentist at Aurelia Dental"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Founder Tag Floating */}
              <div className="absolute top-8 left-8 bg-ivory/95 backdrop-blur-md px-4 py-2 rounded-full border border-beige-dark/50 shadow-soft text-xs font-semibold uppercase tracking-widest text-charcoal">
                Founder & Clinical Director
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal leading-none mb-2">
              Dr. Ananya Rao
            </h2>

            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark mb-6">
              DDS · Cosmetic & Restorative Dentistry
            </p>

            <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed mb-8">
              "My philosophy centers on artistic restraint. True cosmetic dentistry should never look artificial—it should harmonize so seamlessly with your facial symmetry that people notice your confidence before they notice your dental work."
            </p>

            {/* Credentials Checklist */}
            <div className="w-full space-y-4 mb-10">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-3.5 rounded-xl bg-ivory-card border border-beige-dark/30">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-charcoal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal hover:bg-charcoal-light rounded-full transition-all duration-300 shadow-md active:scale-[0.98]"
              >
                Book Consultation with Dr. Rao
                <ArrowRight className="w-4 h-4 ml-3 text-gold" />
              </button>

              <a
                href="#location"
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal bg-beige hover:bg-beige-dark/40 rounded-full border border-beige-dark/60 transition-all duration-300 active:scale-[0.98]"
              >
                Visit Clinic Lounge
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
