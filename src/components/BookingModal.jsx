import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Sparkles, User, Phone, Mail, FileText, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    treatment: 'Cosmetic Dentistry',
    date: '',
    time: 'Morning (9:00 AM - 12:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.date) newErrors.date = 'Preferred date is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate high quality API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      treatment: 'Cosmetic Dentistry',
      date: '',
      time: 'Morning (9:00 AM - 12:00 PM)',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleReset}
        className="fixed inset-0 bg-charcoal/70 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full max-w-2xl bg-ivory rounded-3xl shadow-modal border border-beige-dark/60 overflow-hidden z-10"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 bg-beige border-b border-beige-dark/40">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-sage-dark font-semibold block mb-1">
              Aurelia Dental Concierge
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal">
              Book a Consultation
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="w-10 h-10 rounded-full bg-ivory border border-beige-dark/50 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            /* Success State Screen */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-sage-light text-sage-dark rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-sage shadow-soft">
                <CheckCircle2 className="w-10 h-10 text-sage-dark" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark mb-2 block">
                Appointment Requested
              </span>
              <h4 className="font-serif text-3xl font-medium text-charcoal mb-4">
                Your request has been received.
              </h4>
              <p className="text-sm text-charcoal-muted font-light leading-relaxed max-w-md mx-auto mb-8">
                Our patient care manager will contact you shortly at <span className="font-semibold text-charcoal">{formData.phone}</span> to confirm your appointment time and send pre-visit information.
              </p>

              <div className="p-6 rounded-2xl bg-ivory-card border border-beige-dark/50 text-left max-w-md mx-auto mb-8 text-xs text-charcoal space-y-2">
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Patient Name:</span>
                  <span className="font-semibold">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Treatment:</span>
                  <span className="font-semibold">{formData.treatment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Preferred Date:</span>
                  <span className="font-semibold">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-muted">Slot:</span>
                  <span className="font-semibold">{formData.time}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-full hover:bg-charcoal-light transition-colors"
              >
                Return to Website
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className={`w-full pl-10 pr-4 py-3 bg-ivory-card border text-sm text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                        errors.fullName ? 'border-red-400' : 'border-beige-dark/60'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full pl-10 pr-4 py-3 bg-ivory-card border text-sm text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                        errors.phone ? 'border-red-400' : 'border-beige-dark/60'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="priya@example.com"
                      className={`w-full pl-10 pr-4 py-3 bg-ivory-card border text-sm text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                        errors.email ? 'border-red-400' : 'border-beige-dark/60'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Preferred Treatment */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Preferred Treatment
                  </label>
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ivory-card border border-beige-dark/60 text-sm text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="Cosmetic Dentistry">01 Cosmetic Dentistry</option>
                    <option value="Dental Implants">02 Dental Implants</option>
                    <option value="Invisalign Alignment">03 Invisalign® Alignment</option>
                    <option value="Teeth Whitening">04 Teeth Whitening</option>
                    <option value="Preventive Dentistry">05 Preventive Dentistry</option>
                    <option value="The Aurelia Smile Makeover">06 Aurelia Smile Makeover</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-10 pr-4 py-3 bg-ivory-card border text-sm text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 ${
                        errors.date ? 'border-red-400' : 'border-beige-dark/60'
                      }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                    Preferred Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-ivory-card border border-beige-dark/60 text-sm text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50"
                    >
                      <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
                  Additional Notes or Questions (Optional)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-3.5" />
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to achieve or any anxiety we can help alleviate..."
                    className="w-full pl-10 pr-4 py-3 bg-ivory-card border border-beige-dark/60 text-sm text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-ivory bg-charcoal rounded-xl hover:bg-charcoal-light transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                    Processing Request...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-gold-light" />
                    Request Appointment
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-charcoal-muted font-light">
                By submitting, you agree to receive a confirmation call or message from Aurelia Dental.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
