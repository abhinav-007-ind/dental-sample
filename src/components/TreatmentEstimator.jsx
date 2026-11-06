import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sparkles, Clock, Calendar, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

const ESTIMATOR_OPTIONS = [
  {
    id: 'veneers',
    title: 'Bespoke Veneers',
    desc: 'Porcelain micro-thin shells for shape, color & alignment perfection.',
    duration: '2 visits · 10–14 Days',
    visits: '2 Appointments',
    scans: 'Included (Iterero® 3D)',
    popular: true,
  },
  {
    id: 'aligners',
    title: 'Invisalign® Clear Aligners',
    desc: 'Discreet, removable alignment without traditional metal braces.',
    duration: '6–12 Months',
    visits: 'Bi-monthly Check-ins',
    scans: 'Included (Outcome Simulator)',
    popular: false,
  },
  {
    id: 'whitening',
    title: 'Laser Teeth Whitening',
    desc: 'In-office single session laser whitening up to 8 shades brighter.',
    duration: '1 Session · 60 Minutes',
    visits: '1 Single Visit',
    scans: 'Included (Shade Analysis)',
    popular: false,
  },
  {
    id: 'implants',
    title: '3D Guided Implants',
    desc: 'Permanent, natural-looking implant placement with CBCT guidance.',
    duration: '3–4 Months Healing',
    visits: '3 Key Milestones',
    scans: 'Included (3D CBCT Scan)',
    popular: false,
  }
];

const TreatmentEstimator = ({ onOpenBooking }) => {
  const [selectedGoal, setSelectedGoal] = useState(ESTIMATOR_OPTIONS[0]);
  const [sedationOption, setSedationOption] = useState('standard');

  return (
    <section className="py-24 md:py-36 bg-ivory relative border-t border-beige-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal mb-4">
            Interactive <span className="italic font-normal text-sage-dark inline-block pb-1">Treatment Estimator</span>.
          </h2>
          <p className="text-base text-charcoal-muted font-light leading-relaxed">
            Select your desired treatment goal below to view digital diagnostic steps, appointment count, and estimated timeframes.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Goal Selection Grid */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-dark block mb-2">
              Select Your Primary Aesthetic Goal
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ESTIMATOR_OPTIONS.map((item) => {
                const isSelected = selectedGoal.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGoal(item)}
                    className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 active:scale-[0.98] ${
                      isSelected
                        ? 'bg-charcoal text-ivory border-charcoal shadow-floating'
                        : 'bg-ivory-card text-charcoal border-beige-dark/50 hover:border-gold/60 shadow-soft'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${isSelected ? 'text-gold' : 'text-gold-dark'}`}>
                          {item.id}
                        </span>
                        {item.popular && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-gold/20 text-gold border border-gold/30">
                            Most Requested
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className={`text-xs font-light leading-relaxed mb-4 ${isSelected ? 'text-ivory/70' : 'text-charcoal-muted'}`}>
                        {item.desc}
                      </p>
                    </div>

                    <div className={`pt-3 border-t text-xs flex items-center justify-between font-medium ${
                      isSelected ? 'border-charcoal-muted/30 text-gold' : 'border-beige-dark/30 text-sage-dark'
                    }`}>
                      <span>{item.duration}</span>
                      <span className="uppercase tracking-wider">Select Goal</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Comfort Preference Selector */}
            <div className="mt-8 p-6 rounded-2xl bg-beige/60 border border-beige-dark/50">
              <span className="text-xs font-semibold uppercase tracking-widest text-charcoal block mb-3">
                Comfort Preference
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setSedationOption('standard')}
                  className={`p-3.5 rounded-xl border text-xs font-medium transition-all ${
                    sedationOption === 'standard'
                      ? 'bg-charcoal text-ivory border-charcoal'
                      : 'bg-ivory text-charcoal border-beige-dark/50'
                  }`}
                >
                  Gentle Local Anesthetic
                </button>
                <button
                  onClick={() => setSedationOption('spa')}
                  className={`p-3.5 rounded-xl border text-xs font-medium transition-all ${
                    sedationOption === 'spa'
                      ? 'bg-charcoal text-ivory border-charcoal'
                      : 'bg-ivory text-charcoal border-beige-dark/50'
                  }`}
                >
                  Relaxation Spa Sedation
                </button>
              </div>
            </div>
          </div>

          {/* Right: Summary Output Card */}
          <div className="lg:col-span-5 bg-ivory-card p-8 rounded-3xl border border-beige-dark/60 shadow-floating flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-beige-dark/40">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  Custom Treatment Summary
                </span>
                <span className="text-xs text-sage-dark font-medium">
                  3D Scan Included
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGoal.id + sedationOption}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-3xl font-semibold text-charcoal mb-2">
                    {selectedGoal.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted font-light mb-8">
                    Estimated clinical workflow based on Aurelia 3D protocols.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-ivory border border-beige-dark/40">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gold-dark" />
                        <span className="text-xs text-charcoal font-medium">Estimated Timeline</span>
                      </div>
                      <span className="text-xs font-semibold text-charcoal">{selectedGoal.duration}</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-ivory border border-beige-dark/40">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-gold-dark" />
                        <span className="text-xs text-charcoal font-medium">Visit Count</span>
                      </div>
                      <span className="text-xs font-semibold text-charcoal">{selectedGoal.visits}</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-ivory border border-beige-dark/40">
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-4 h-4 text-gold-dark" />
                        <span className="text-xs text-charcoal font-medium">Digital Scan</span>
                      </div>
                      <span className="text-xs font-semibold text-sage-dark">{selectedGoal.scans}</span>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-ivory border border-beige-dark/40">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-gold-dark" />
                        <span className="text-xs text-charcoal font-medium">Comfort Mode</span>
                      </div>
                      <span className="text-xs font-semibold text-charcoal capitalize">{sedationOption} Care</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-beige-dark/40">
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal hover:bg-charcoal-light rounded-full transition-all duration-300 shadow-md active:scale-[0.98]"
              >
                Reserve Consultation for This Plan
                <ArrowRight className="w-4 h-4 ml-3 text-gold" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TreatmentEstimator;
