export type FAQ = {
  id: string;
  category: string;
  question: string;
  answer: string;
  cta?: { label: string; href: string };
};

export const FAQS: FAQ[] = [
  // Appointments
  {
    id: "how-to-book",
    category: "Appointments",
    question: "How do I book an appointment?",
    answer:
      "Fill in the form on our Contact page, send us a WhatsApp on 0114 461 958, or call 0114 461 958. We confirm within 2 hours.",
    cta: { label: "Book an appointment →", href: "/contact#appointment-form" },
  },
  {
    id: "pharmacy-appointment",
    category: "Appointments",
    question: "Do I need an appointment for the pharmacy?",
    answer:
      "No. Walk in any time — the pharmacy is open 24 hours, 7 days a week. No appointment is needed for pharmacy services.",
    cta: { label: "Visit our Pharmacy page →", href: "/pharmacy" },
  },
  {
    id: "specific-doctor",
    category: "Appointments",
    question: "Can I book for a specific doctor or clinical officer?",
    answer:
      "Yes. Mention your preferred staff member in the appointment form or WhatsApp message and we will do our best to accommodate your request.",
    cta: { label: "Book an appointment →", href: "/contact#appointment-form" },
  },
  // Pharmacy
  {
    id: "pharmacy-24hr",
    category: "Pharmacy",
    question: "Is the pharmacy really open 24 hours?",
    answer:
      "Yes. The Kham Medicus pharmacy operates 24 hours a day, 7 days a week. Call 0114 461 958 to confirm stock availability for specific medications.",
    cta: { label: "Chat on WhatsApp →", href: "https://wa.me/254114461958" },
  },
  {
    id: "prescription-meds",
    category: "Pharmacy",
    question: "Do you stock prescription medications?",
    answer:
      "Yes. Bring your prescription or enquire via WhatsApp before visiting so we can confirm availability for your specific medication.",
    cta: { label: "Chat on WhatsApp →", href: "https://wa.me/254114461958" },
  },
  {
    id: "repeat-prescription",
    category: "Pharmacy",
    question: "Can I get a repeat prescription filled here?",
    answer:
      "Yes. Speak to Moses Wafula, our pharmacist, for repeat prescription guidance. Bring your previous prescription or contact us via WhatsApp.",
    cta: { label: "Chat on WhatsApp →", href: "https://wa.me/254114461958" },
  },
  // Insurance & Payments
  {
    id: "insurance",
    category: "Insurance & Payments",
    question: "Do you accept insurance?",
    answer:
      "We are building relationships with insurance and corporate health providers. Contact us to discuss your cover and we will advise on the current options available.",
    cta: { label: "Get in touch →", href: "/contact" },
  },
  {
    id: "payment-methods",
    category: "Insurance & Payments",
    question: "What payment methods do you accept?",
    answer:
      "Cash and M-Pesa are accepted. Online payment options are being planned for a future phase.",
    cta: { label: "Contact us →", href: "/contact" },
  },
  // Location & Parking
  {
    id: "location",
    category: "Location & Parking",
    question: "Where exactly are you located?",
    answer:
      "Komarock Plaza, Spine Road, Nairobi North. Use the Google Maps link on our Contact page for turn-by-turn directions.",
    cta: {
      label: "Get directions →",
      href: "https://maps.google.com/?q=Komarock+Plaza+Spine+Road+Nairobi",
    },
  },
  {
    id: "parking",
    category: "Location & Parking",
    question: "Is parking available?",
    answer:
      "Yes. Komarock Plaza has on-site parking available for visitors.",
    cta: { label: "See location →", href: "/contact" },
  },
  // Services
  {
    id: "emergencies",
    category: "Services",
    question: "Do you handle emergencies?",
    answer:
      "Yes. Emergency services are available 24 hours a day. Come directly to the clinic or call 0114 461 958 immediately.",
    cta: { label: "Call 0114 461 958 →", href: "tel:+254114461958" },
  },
  {
    id: "antenatal",
    category: "Services",
    question: "Do you offer antenatal care?",
    answer:
      "Yes — we offer pregnancy monitoring, scheduled ANC visits, blood pressure and urine checks, nutritional guidance, and delivery referrals.",
    cta: { label: "Book an appointment →", href: "/contact#appointment-form" },
  },
  {
    id: "laboratory",
    category: "Services",
    question: "Do you have a laboratory?",
    answer:
      "Contact us to confirm the current diagnostic services available at the clinic.",
    cta: { label: "Contact us →", href: "/contact" },
  },
  {
    id: "vaccinations",
    category: "Services",
    question: "Can I get vaccinations here?",
    answer:
      "Yes. Child and adult immunisations and travel vaccines are available. Book an appointment or walk in and we will advise on the right vaccines for you.",
    cta: { label: "Book an appointment →", href: "/contact#appointment-form" },
  },
  {
    id: "medical-certificate",
    category: "Services",
    question: "Do you provide a medical certificate after consultation?",
    answer:
      "Yes. Ask your clinical officer during your visit and a medical certificate will be issued as part of your consultation.",
    cta: { label: "Book a consultation →", href: "/contact#appointment-form" },
  },
];

export const FAQ_CATEGORIES = [
  "Appointments",
  "Pharmacy",
  "Insurance & Payments",
  "Location & Parking",
  "Services",
];
