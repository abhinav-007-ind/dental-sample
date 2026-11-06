export const SITE_METADATA = {
  name: "AURELIA DENTAL",
  tagline: "Exceptional Dentistry. Naturally Confident.",
  phone: "+91 98765 43210",
  email: "hello@aureliadental.com",
  address: "123, Anna Salai, Chennai, Tamil Nadu 600002",
  hours: "Mon–Sat · 9:00 AM–7:00 PM",
  doctor: "Dr. Ananya Rao",
  rating: "4.9/5",
  yearsOfExcellence: "10+",
  smilesTransformed: "5,000+"
};

export const TREATMENTS = [
  {
    id: "cosmetic-dentistry",
    number: "01",
    name: "Cosmetic Dentistry",
    shortDesc: "Custom porcelain veneers and aesthetic contours tailored to your unique facial geometry.",
    fullDesc: "Our cosmetic dentistry procedures fuse artistic nuance with micro-precision. From subtle enamel recontouring to ultra-thin hand-crafted porcelain veneers, every enhancement harmonizes naturally with your features.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    features: [
      "Ultra-thin ceramic porcelain veneers",
      "Biomimetic aesthetic enamel shaping",
      "Digital smile design previews",
      "Stain-resistant high-lustre finish"
    ],
    duration: "2 - 3 visits",
    idealFor: "Discolored, chipped, gapped, or uneven teeth"
  },
  {
    id: "dental-implants",
    number: "02",
    name: "Dental Implants",
    shortDesc: "Permanent, natural-feeling tooth restorations backed by 3D computer-guided precision.",
    fullDesc: "Using state-of-the-art titanium and ceramic implant posts, we reconstruct root structures to deliver permanent teeth that look, feel, and function exactly like natural enamel.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    features: [
      "3D CBCT guided implant placement",
      "Biocompatible titanium & zirconia posts",
      "Same-day temporary crowns available",
      "Lifetime structural warranty"
    ],
    duration: "3 - 6 months total care",
    idealFor: "Missing teeth or severe structural decay"
  },
  {
    id: "invisalign",
    number: "03",
    name: "Invisalign® Alignment",
    shortDesc: "Discreet clear aligner therapy designed to straighten teeth without visible metal braces.",
    fullDesc: "Achieve a perfectly aligned arch with custom-engineered medical-grade clear aligners. Using 3D iTero optical scans, your entire tooth movement is digitally mapped down to the fraction of a millimeter.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    features: [
      "Near-invisible SmartTrack™ clear aligners",
      "Removable for effortless dining and brushing",
      "3D treatment progress simulation",
      "Fewer check-ups needed vs traditional braces"
    ],
    duration: "6 - 14 months",
    idealFor: "Crowding, spacing, or mild byte alignment issues"
  },
  {
    id: "teeth-whitening",
    number: "04",
    name: "Teeth Whitening",
    shortDesc: "Gentle in-office light-activated whitening system brightening up to 8 shades in 60 minutes.",
    fullDesc: "Experience clinical-grade laser whitening formulated with desensitizing agents that preserve enamel integrity while eliminating years of stubborn coffee, tea, and tobacco discoloration.",
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80",
    features: [
      "Instant 8-shade brightening in one visit",
      "Zero-sensitivity enamel defense formula",
      "Custom take-home maintenance kit included",
      "Safe light-activated peroxide technology"
    ],
    duration: "60 minutes in clinic",
    idealFor: "Surface stains, deep oxidation, wedding or event prep"
  },
  {
    id: "preventive-dentistry",
    number: "05",
    name: "Preventive Dentistry",
    shortDesc: "Proactive oral health assessments, air-abrasion hygiene, and gum health preservation.",
    fullDesc: "Preventive care is the cornerstone of long-term wellness. Our gentle ultrasonic cleaning, salivary diagnostics, and deep enamel fluoridation keep your gums resilient and teeth immune to decay.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    features: [
      "Guided biofilm airflow therapy",
      "Low-radiation digital radiography",
      "Comprehensive periodontal screening",
      "Bespoke oral hygiene regimens"
    ],
    duration: "45 minutes biannually",
    idealFor: "Routine oral maintenance and cavity prevention"
  },
  {
    id: "smile-makeover",
    number: "06",
    name: "Smile Makeovers",
    shortDesc: "Comprehensive aesthetic transformations harmonizing shade, alignment, and facial symmetry.",
    fullDesc: "The ultimate combination of cosmetic artistry and restorative science. We engineer complete arch transformations tailored to your smile line, lip drape, and skin tone for natural confidence.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Facial-driven aesthetic proportions",
      "Full digital mock-up before procedure",
      "Multidisciplinary specialist care",
      "Long-lasting ceramic translucency"
    ],
    duration: "Bespoke schedule (2-4 weeks)",
    idealFor: "Complex aesthetic needs or full arch transformations"
  }
];

export const SIGNATURE_STEPS = [
  {
    step: "01",
    title: "Digital Smile Design",
    description: "High-resolution facial scanning and 3D optical mapping capture every subtlety of your facial dynamics and tooth contours."
  },
  {
    step: "02",
    title: "Personalized Treatment Plan",
    description: "Dr. Ananya Rao hand-crafts a digital blueprint and physical try-in mock-up so you can test drive your new smile."
  },
  {
    step: "03",
    title: "Precision Treatment",
    description: "Gentle, micro-invasive execution using state-of-the-art ceramics, laser equipment, and stress-free comforting techniques."
  },
  {
    step: "04",
    title: "Final Transformation",
    description: "Permanent bonding of your bespoke restorations, resulting in a radiant, resilient, and naturally confident smile."
  }
];

export const TECHNOLOGIES = [
  {
    id: "3d-scanning",
    name: "3D Digital Scanning",
    tagline: "No messy impressions",
    description: "Our iTero intraoral scanner captures 6,000 frames per second, creating precise 3D digital models of your teeth in under two minutes without gagging.",
    iconName: "Scan"
  },
  {
    id: "digital-xray",
    name: "Digital X-Rays & CBCT",
    tagline: "90% less radiation exposure",
    description: "Ultra-low radiation 3D Cone Beam Computed Tomography provides 360-degree anatomical clarity of bones, roots, and nerves for surgical safety.",
    iconName: "Cpu"
  },
  {
    id: "ai-planning",
    name: "AI-Assisted Treatment Planning",
    tagline: "Predictable, diagnostic accuracy",
    description: "Machine learning algorithms analyze radiographic patterns to detect micro-lesions early and simulate exact biomechanical tooth movements.",
    iconName: "Sparkles"
  },
  {
    id: "computer-guided",
    name: "Computer-Guided Dentistry",
    tagline: "Micron-level surgical accuracy",
    description: "Surgical guides custom 3D-printed for your anatomy allow dental implant placement with sub-millimeter precision and minimal recovery time.",
    iconName: "Crosshair"
  }
];

export const SMILE_GALLERY = [
  {
    id: 1,
    title: "Veneer Aesthetic Transformation",
    category: "Cosmetic",
    duration: "2 Weeks · 8 Porcelain Veneers",
    description: "Corrected severe surface discoloration and minor spacing with custom hand-layered ceramic veneers.",
    beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Complete Aurelia Smile Makeover",
    category: "Cosmetic",
    duration: "12 Weeks · Alignment & Veneers",
    description: "Full arch reconstruction combining Invisalign clear aligners with ultra-thin porcelain restorations.",
    beforeImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Laser Enamel Whitening",
    category: "Whitening",
    duration: "60 Minutes · In-Office Laser",
    description: "Eliminated deep coffee oxidation and lightened tooth shade by 8 levels in a single peaceful session.",
    beforeImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Invisalign Arch Alignment",
    category: "Alignment",
    duration: "8 Months · SmartTrack Aligners",
    description: "Straightened severe anterior crowding and improved byte occlusion seamlessly without fixed metal brackets.",
    beforeImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Restorative Implant & Crown",
    category: "Restorative",
    duration: "4 Months · 3D Guided Implant",
    description: "Restored a fractured central incisor with a single titanium implant post and translucency-matched crown.",
    beforeImg: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Aurelia completely changed my confidence. Every part of the experience felt thoughtful, luxurious, and deeply personal. I never knew a dental appointment could feel like a wellness retreat.",
    name: "Priya M.",
    location: "Chennai",
    treatment: "Aurelia Smile Makeover",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "I had always been nervous about dental treatment due to past experiences. Dr. Ananya Rao and her team made the entire process incredibly comfortable, gentle, and transparent.",
    name: "Arjun R.",
    location: "Chennai",
    treatment: "Invisalign & Laser Whitening",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "I finally have the smile I always wanted. The 3D Digital Smile Design let me preview the exact result before we started. The final veneers exceeded all my expectations.",
    name: "Sarah K.",
    location: "Bengaluru",
    treatment: "Porcelain Veneers",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    question: "How do I book an appointment?",
    answer: "You can book directly on our website using the 'Book Consultation' button, call our reception desk at +91 98765 43210, or send an email to hello@aureliadental.com. Our patient concierge will assist in scheduling a convenient time."
  },
  {
    question: "Do you accept new patients?",
    answer: "Yes, Aurelia Dental is currently welcoming new patients for comprehensive consultations, cosmetic smile makeovers, alignment therapies, and routine preventive care."
  },
  {
    question: "How much does a consultation cost?",
    answer: "Our comprehensive initial consultation includes digital intraoral scanning, high-resolution 3D imaging, and a face-to-face consultation with Dr. Ananya Rao. Contact our team for current consultation package pricing and bespoke treatment estimates."
  },
  {
    question: "Do you offer Invisalign?",
    answer: "Yes, we are a certified Invisalign provider using the latest iTero 3D optical scanning technology. We design discreet clear aligners for both teens and adults seeking subtle orthotropic alignment."
  },
  {
    question: "How long does a smile makeover take?",
    answer: "Transformation timelines vary based on individual needs. Simple whitening or minor contouring takes 1 session. Porcelain veneer transformations typically take 2-3 visits across 2 weeks. Comprehensive alignments take 6-12 months."
  },
  {
    question: "Do you provide emergency dental care?",
    answer: "Yes, we reserve priority emergency appointments daily for severe pain, tooth fractures, or urgent trauma. Please call +91 98765 43210 immediately for immediate clinical guidance."
  }
];
