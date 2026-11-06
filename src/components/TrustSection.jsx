import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const metrics = [
    {
      value: "10+",
      label: "Years of Excellence",
      subtitle: "Dedicated cosmetic & restorative mastery"
    },
    {
      value: "5,000+",
      label: "Smiles Transformed",
      subtitle: "Custom smile design transformations"
    },
    {
      value: "4.9 / 5",
      label: "Patient Rating",
      subtitle: "Over 850+ verified patient reviews"
    },
    {
      value: "Advanced",
      label: "Digital Dentistry",
      subtitle: "3D scanning & CBCT precision"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-beige border-y border-beige-dark/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-start lg:items-center text-left lg:text-center relative group"
            >
              {/* Subtle top accent line */}
              <div className="w-8 h-[2px] bg-gold/60 mb-6 group-hover:w-16 transition-all duration-300" />
              
              <span className="font-serif text-4xl sm:text-5xl font-medium text-charcoal tracking-tight mb-2">
                {item.value}
              </span>
              <span className="text-sm font-semibold uppercase tracking-widest text-sage-dark mb-1">
                {item.label}
              </span>
              <span className="text-xs text-charcoal-muted font-light">
                {item.subtitle}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
