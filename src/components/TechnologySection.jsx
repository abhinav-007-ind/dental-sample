import React from 'react';
import { Scan, Cpu, Sparkles, Crosshair, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '../data/content';

const iconMap = {
  Scan: Scan,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Crosshair: Crosshair
};

const TechnologySection = ({ onOpenBooking }) => {
  return (
    <section id="technology" className="py-24 md:py-36 bg-charcoal-deep text-ivory relative overflow-hidden border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-ivory leading-tight mb-6">
            Precision, powered by <br />
            <span className="italic font-normal text-gold inline-block pb-1">technology</span>.
          </h2>
          <p className="text-base sm:text-lg text-ivory/70 font-light leading-relaxed">
            We replace traditional invasive discomfort with sub-millimeter optical scanning, 3D radiographic modeling, and computer-guided placement.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TECHNOLOGIES.map((tech, idx) => {
            const IconComponent = iconMap[tech.iconName] || Scan;
            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-charcoal/80 rounded-2xl p-8 border border-charcoal-muted/30 hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-charcoal-light border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full bg-charcoal-light border border-charcoal-muted/40 text-gold-light">
                      {tech.tagline}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-ivory mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-charcoal-muted/20 flex items-center justify-between text-xs text-ivory/50">
                  <span>Sub-millimeter Accuracy</span>
                  <span className="text-gold font-medium">Standard at Aurelia</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Banner Callout */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-charcoal-light via-charcoal to-charcoal-light border border-gold/30 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h4 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
              Experience gentle, impression-free dentistry.
            </h4>
            <p className="text-xs sm:text-sm text-ivory/70 font-light">
              Schedule your initial 3D optical scan during your consultation session.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-charcoal bg-ivory hover:bg-gold-light rounded-full transition-all duration-300 shrink-0 active:scale-[0.98]"
          >
            Book 3D Scan Consultation
            <ArrowRight className="w-4 h-4 text-charcoal" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
