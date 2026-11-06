import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';
import { SMILE_GALLERY } from '../data/content';

// Interactive Drag Slider Component for Before/After
const BeforeAfterSlider = ({ beforeImg, afterImg, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-beige select-none cursor-ew-resize before-after-slider"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full width background) */}
      <img
        src={afterImg}
        alt={`${title} after transformation`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* After Badge */}
      <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-charcoal/80 text-ivory text-[10px] font-semibold uppercase tracking-widest backdrop-blur-sm">
        After
      </span>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImg}
          alt={`${title} before transformation`}
          className="absolute inset-0 max-w-none h-full object-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Before Badge */}
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-ivory/90 text-charcoal text-[10px] font-semibold uppercase tracking-widest backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* Vertical Slider Line & Control Handle */}
      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-ivory shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-ivory border-2 border-gold shadow-floating flex items-center justify-center text-charcoal">
          <ArrowLeftRight className="w-3.5 h-3.5 text-gold-dark" />
        </div>
      </div>
    </div>
  );
};

const SmileGallerySection = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Cosmetic', 'Whitening', 'Alignment', 'Restorative'];

  const filteredItems = activeFilter === 'All'
    ? SMILE_GALLERY
    : SMILE_GALLERY.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-ivory relative border-t border-beige-dark/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal mb-6">
            Smile <span className="italic font-normal text-sage-dark inline-block pb-1">Gallery</span>.
          </h2>
          <p className="text-base text-charcoal-muted font-light leading-relaxed">
            Drag the slider across any transformation card below to observe the seamless transition between before and after results.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 active:scale-[0.98] ${
                activeFilter === category
                  ? 'bg-charcoal text-ivory shadow-md'
                  : 'bg-beige text-charcoal-muted hover:bg-beige-dark/50 border border-beige-dark/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-ivory-card rounded-2xl p-6 border border-beige-dark/40 shadow-soft hover:shadow-card transition-shadow"
              >
                {/* Before/After Drag Slider */}
                <BeforeAfterSlider
                  beforeImg={item.beforeImg}
                  afterImg={item.afterImg}
                  title={item.title}
                />

                {/* Info Footer */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                      {item.category}
                    </span>
                    <span className="text-xs text-charcoal-muted">
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-charcoal-muted mb-4 font-light">
            Ready to design your own custom transformation?
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal hover:bg-charcoal-light rounded-full transition-all duration-300 shadow-md active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            Book Smile Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default SmileGallerySection;
