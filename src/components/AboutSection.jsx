import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Heart, Sparkles, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      title: "Personalized Treatment Plans",
      description: "Tailored around your aesthetic goals, face shape, and dental history for natural harmony.",
      icon: Sparkles
    },
    {
      title: "Advanced Digital Technology",
      description: "No sticky impressions. Precision 3D optical scanning & ultra-low radiation radiography.",
      icon: ShieldCheck
    },
    {
      title: "Gentle, Comfortable Care",
      description: "Calm, spa-like environment designed to soothe anxiety with gentle clinical techniques.",
      icon: Heart
    },
    {
      title: "Experienced Dental Specialists",
      description: "Led by Dr. Ananya Rao with over 10+ years of dedicated cosmetic & restorative expertise.",
      icon: UserCheck
    }
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl p-3 bg-beige/60 border border-beige-dark/50 shadow-soft">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden img-zoom-container">
                <img
                  src="/images/clinic_interior.jpg"
                  alt="Aurelia Dental Clinic reception interior lounge"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Philosophy Quote Overlay */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-charcoal text-ivory p-6 rounded-2xl max-w-xs shadow-floating border border-gold/30 hidden sm:block">
                <p className="font-serif text-lg italic leading-snug mb-2 text-ivory">
                  "Care should feel as refined as the results we deliver."
                </p>
                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                  — Dr. Ananya Rao
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal leading-tight mb-6">
              Dentistry that puts <br />
              <span className="italic font-normal text-sage-dark inline-block pb-1">you</span> first.
            </h2>
            <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed mb-10">
              At Aurelia Dental, we believe dentistry should be an empowering, tranquil experience. We combine clinical expertise with modern 3D digital technology to create personalized treatment plans that respect your time, comfort, and unique aesthetic vision.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-ivory-card border border-beige-dark/30 hover:border-gold/40 transition-colors">
                    <div className="p-2.5 rounded-full bg-sage-light text-sage-dark shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-charcoal-muted font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#team"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-charcoal bg-beige hover:bg-beige-dark/50 border border-beige-dark/60 rounded-full transition-all duration-300 active:scale-[0.98]"
            >
              Meet Our Specialists
              <ArrowRight className="w-4 h-4 text-gold-dark" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
