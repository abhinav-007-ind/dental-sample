import React from 'react';
import { X, CheckCircle2, Clock, Sparkles, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TreatmentDetailModal = ({ treatment, onClose, onBookTreatment }) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full max-w-3xl bg-ivory rounded-3xl shadow-modal border border-beige-dark/60 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header Image */}
        <div className="relative aspect-[21/9] min-h-[200px] overflow-hidden bg-beige">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ivory/80 backdrop-blur-md border border-beige-dark/50 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory transition-colors z-20"
            aria-label="Close procedure modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="font-serif text-3xl font-light text-gold tracking-widest block mb-1">
              {treatment.number}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-ivory">
              {treatment.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            {treatment.fullDesc}
          </p>

          {/* Clinical Highlights Grid */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-sage-dark mb-4">
              Clinical Highlights & Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treatment.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-ivory-card border border-beige-dark/40">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <span className="text-xs text-charcoal font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Duration & Candidates Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-beige-dark/40">
            <div className="p-4 rounded-xl bg-beige/60 border border-beige-dark/40 flex items-center gap-3">
              <Clock className="w-5 h-5 text-gold-dark" />
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal-muted block">
                  Expected Timeline
                </span>
                <span className="text-xs font-semibold text-charcoal">
                  {treatment.duration}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-beige/60 border border-beige-dark/40 flex items-center gap-3">
              <User className="w-5 h-5 text-gold-dark" />
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal-muted block">
                  Ideal Candidate
                </span>
                <span className="text-xs font-semibold text-charcoal">
                  {treatment.idealFor}
                </span>
              </div>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-beige-dark/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal-muted font-light">
              Schedule a personalized consultation with Dr. Ananya Rao.
            </p>
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.name);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-full hover:bg-charcoal-light transition-colors shadow-md"
            >
              <Sparkles className="w-4 h-4 mr-2 text-gold-light" />
              Book {treatment.name}
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default TreatmentDetailModal;
