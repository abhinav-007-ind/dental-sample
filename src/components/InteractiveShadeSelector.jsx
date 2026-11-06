import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, Info, ArrowRight, Eye } from 'lucide-react';

const SHADES = [
  {
    id: 'bl1',
    name: 'BL1 Hollywood Pristine',
    category: 'Ultra Bright Bleach Shade',
    hex: '#FDFCF7',
    brightness: '100%',
    translucency: 'High Polish Glass',
    recommendedFor: 'Bold, luminous transformations and red-carpet aesthetics.',
    matchPercent: '98% Aesthetic Preference',
  },
  {
    id: 'a1',
    name: 'A1 Natural Luminous',
    category: 'Bright Natural Teeth',
    hex: '#FAF6ED',
    brightness: '92%',
    translucency: 'Natural Enamel Gradient',
    recommendedFor: 'Discreet enhancement that looks naturally flawless in any light.',
    matchPercent: '96% Clinical Choice',
  },
  {
    id: 'b1',
    name: 'B1 Soft Warm Ivory',
    category: 'Classic Elegance',
    hex: '#F6F0E4',
    brightness: '86%',
    translucency: 'Soft Warm Opal',
    recommendedFor: 'Warm undertones desiring seamless harmony with facial symmetry.',
    matchPercent: '94% Aesthetic Preference',
  },
  {
    id: 'a2',
    name: 'A2 Sunlit Warmth',
    category: 'Subtle Restorative',
    hex: '#F2E8D8',
    brightness: '80%',
    translucency: 'Deep Enamel Layering',
    recommendedFor: 'Single-tooth restorations matching natural adjacent enamel.',
    matchPercent: '92% Restorative Match',
  }
];

const InteractiveShadeSelector = ({ onOpenBooking }) => {
  const [selectedShade, setSelectedShade] = useState(SHADES[1]); // Default to A1

  return (
    <section className="py-24 md:py-36 bg-ivory-card border-t border-beige-dark/40 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal mb-4">
            Custom Porcelain <span className="italic font-normal text-sage-dark inline-block pb-1">Shade Studio</span>.
          </h2>
          <p className="text-base text-charcoal-muted font-light leading-relaxed">
            Every Aurelia veneer and crown is handcrafted in master ceramic laboratories. Preview shade gradients, enamel translucency, and natural light reflection below.
          </p>
        </div>

        {/* Studio Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Shade Selector Controls */}
          <div className="lg:col-span-5 bg-ivory p-8 rounded-3xl border border-beige-dark/60 shadow-soft flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">
                Select Your Aesthetic Grade
              </h3>
              <p className="text-xs text-charcoal-muted font-light mb-8">
                Click any ceramic grade to inspect translucent layering & recommendation profiles.
              </p>

              {/* Shade Pill Buttons */}
              <div className="space-y-3 mb-8">
                {SHADES.map((shade) => {
                  const isSelected = selectedShade.id === shade.id;
                  return (
                    <button
                      key={shade.id}
                      onClick={() => setSelectedShade(shade)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 active:scale-[0.98] ${
                        isSelected
                          ? 'bg-charcoal text-ivory border-charcoal shadow-md'
                          : 'bg-ivory-card text-charcoal border-beige-dark/50 hover:border-gold/60'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className="w-8 h-8 rounded-full border border-gold/40 shadow-inner shrink-0"
                          style={{ backgroundColor: shade.hex }}
                        />
                        <div>
                          <span className="block font-medium text-sm">
                            {shade.name}
                          </span>
                          <span className={`text-[11px] font-light ${isSelected ? 'text-ivory/70' : 'text-charcoal-muted'}`}>
                            {shade.category}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-gold text-charcoal flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-beige-dark/30 flex items-center gap-2 text-xs text-sage-dark font-medium">
              <Info className="w-4 h-4 text-gold-dark shrink-0" />
              <span>Final shade is calibrated with 3D digital try-ins during your consultation.</span>
            </div>
          </div>

          {/* Right Column: Dynamic Shade Preview Card */}
          <div className="lg:col-span-7 bg-charcoal text-ivory p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-floating flex flex-col justify-between relative overflow-hidden">
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-charcoal to-charcoal-deep opacity-90 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-charcoal-muted/30">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  3D Ceramic Shade Profile
                </span>
                <span className="text-xs text-ivory/50 font-mono">
                  GRADE ID: {selectedShade.id.toUpperCase()}
                </span>
              </div>

              {/* Dynamic Animated Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedShade.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
                    <div>
                      <h4 className="font-serif text-3xl sm:text-4xl font-medium text-ivory mb-1">
                        {selectedShade.name}
                      </h4>
                      <p className="text-xs text-gold uppercase tracking-wider font-medium">
                        {selectedShade.category}
                      </p>
                    </div>

                    {/* Color Swatch Display Circle */}
                    <div className="flex items-center gap-3 bg-charcoal-light/80 px-4 py-3 rounded-2xl border border-gold/40 shadow-soft">
                      <div
                        className="w-10 h-10 rounded-full border-2 border-gold shadow-md"
                        style={{ backgroundColor: selectedShade.hex }}
                      />
                      <div className="text-left">
                        <span className="text-[10px] uppercase text-ivory/60 block font-mono">Luminance</span>
                        <span className="text-sm font-semibold text-ivory">{selectedShade.brightness}</span>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Body */}
                  <p className="text-sm sm:text-base text-ivory/80 font-light leading-relaxed mb-8 bg-charcoal-light/40 p-5 rounded-2xl border border-charcoal-muted/30">
                    {selectedShade.recommendedFor}
                  </p>

                  {/* Spec Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-charcoal-light/60 border border-charcoal-muted/20">
                      <span className="text-[10px] uppercase text-ivory/50 block tracking-wider mb-1">Translucency</span>
                      <span className="text-xs font-semibold text-ivory">{selectedShade.translucency}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-charcoal-light/60 border border-charcoal-muted/20">
                      <span className="text-[10px] uppercase text-ivory/50 block tracking-wider mb-1">Laboratory Precision</span>
                      <span className="text-xs font-semibold text-ivory">0.1mm Multi-Layer</span>
                    </div>
                    <div className="p-4 rounded-xl bg-charcoal-light/60 border border-charcoal-muted/20 col-span-2 sm:col-span-1">
                      <span className="text-[10px] uppercase text-ivory/50 block tracking-wider mb-1">Satisfaction Rate</span>
                      <span className="text-xs font-semibold text-gold">{selectedShade.matchPercent}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Footer */}
            <div className="relative z-10 pt-6 border-t border-charcoal-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-ivory/60 font-light text-center sm:text-left">
                Want to preview this shade on your smile photos?
              </span>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light rounded-full transition-all duration-300 shadow-md active:scale-[0.98]"
              >
                Book Shade Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveShadeSelector;
