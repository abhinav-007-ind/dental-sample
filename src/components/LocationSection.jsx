import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

const LocationSection = () => {
  return (
    <section id="location" className="py-24 md:py-36 bg-beige border-t border-beige-dark/50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact & Hours Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-ivory p-8 sm:p-12 rounded-3xl border border-beige-dark/60 shadow-soft">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-charcoal mb-8">
                Location & <span className="italic font-normal text-sage-dark inline-block pb-1">Hours</span>.
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-beige text-gold-dark shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                      Clinic Address
                    </h4>
                    <p className="text-base text-charcoal font-medium">
                      Aurelia Dental
                    </p>
                    <p className="text-sm text-charcoal-muted font-light">
                      123, Anna Salai, Mount Road<br />
                      Chennai, Tamil Nadu 600002
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-beige text-gold-dark shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-charcoal font-medium">
                      Monday – Saturday
                    </p>
                    <p className="text-sm text-charcoal-muted font-light">
                      9:00 AM – 7:00 PM
                    </p>
                    <p className="text-xs text-sage-dark font-medium mt-1">
                      Sunday: Closed (Emergency on-call)
                    </p>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-beige text-gold-dark shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                      Phone Concierge
                    </h4>
                    <a
                      href="tel:+919876543210"
                      className="text-base text-charcoal font-medium hover:text-gold-dark transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-beige text-gold-dark shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-charcoal-muted font-semibold mb-1">
                      Email Inquiries
                    </h4>
                    <a
                      href="mailto:hello@aureliadental.com"
                      className="text-base text-charcoal font-medium hover:text-gold-dark transition-colors"
                    >
                      hello@aureliadental.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-beige-dark/40 mt-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-gold-dark transition-colors"
              >
                <Navigation className="w-4 h-4 text-gold-dark" />
                Get Driving Directions on Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Stylish Map Placeholder / Interactive Visual Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-beige-dark/60 shadow-soft relative min-h-[400px] bg-ivory-card flex flex-col justify-between p-8">
            {/* Map Art Background overlay */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#1A1C1E_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-4 py-1.5 rounded-full bg-charcoal text-ivory text-xs font-semibold uppercase tracking-widest">
                Anna Salai Landmark
              </span>
              <span className="text-xs text-charcoal-muted font-light">
                Valet Parking Available
              </span>
            </div>

            {/* Centered Map Pin Graphic */}
            <div className="relative z-10 my-auto text-center p-8 bg-ivory/80 backdrop-blur-md rounded-2xl border border-beige-dark/50 max-w-sm mx-auto shadow-floating">
              <div className="w-16 h-16 rounded-full bg-charcoal text-ivory flex items-center justify-center mx-auto mb-4 border-2 border-gold shadow-md">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-1">
                AURELIA DENTAL
              </h3>
              <p className="text-xs text-charcoal-muted font-light mb-4">
                123, Anna Salai, Chennai, Tamil Nadu 600002
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-full hover:bg-charcoal-light transition-colors"
              >
                Open Interactive Map
              </a>
            </div>

            <div className="relative z-10 text-xs text-charcoal-muted text-center font-light">
              Located in the heart of Anna Salai • 15 minutes from Nungambakkam
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
