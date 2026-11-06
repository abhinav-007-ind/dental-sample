import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/content';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-ivory border-t border-beige-dark/40 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-charcoal mb-4">
            Frequently Asked <span className="italic font-normal text-sage-dark inline-block pb-1">Questions</span>.
          </h2>
          <p className="text-sm text-charcoal-muted font-light">
            Everything you need to know before visiting Aurelia Dental.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-ivory-card border-gold/50 shadow-soft'
                    : 'bg-ivory border-beige-dark/50 hover:border-beige-dark'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl font-medium text-charcoal">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-charcoal text-ivory' : 'bg-beige text-charcoal-muted'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-charcoal-muted font-light leading-relaxed border-t border-beige-dark/30 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
