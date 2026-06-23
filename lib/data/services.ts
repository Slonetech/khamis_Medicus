export type Service = {
  id: string;
  name: string;
  description: string;
  whatToExpect: string[];
  isEmergency?: boolean;
  is24hr?: boolean;
};

export const SERVICES: Service[] = [
  {
    id: "outpatient-consultation",
    name: "Outpatient Consultation",
    description:
      "Comprehensive GP visits, illness management, and chronic disease follow-up. Our clinical officers provide thorough assessments and personalised treatment plans for patients of all ages.",
    whatToExpect: [
      "Full health assessment and history review",
      "Diagnosis, treatment prescription, and referral if needed",
      "Chronic disease monitoring (diabetes, hypertension, asthma, etc.)",
    ],
  },
  {
    id: "emergency-services",
    name: "Emergency Services",
    description:
      "Immediate care when you need it most. Our team is available 24 hours a day to handle urgent medical situations — walk in any time or call us directly.",
    whatToExpect: [
      "Rapid triage and stabilisation",
      "Emergency wound care and fracture management",
      "Referral to hospital when required",
    ],
    isEmergency: true,
  },
  {
    id: "immunisation",
    name: "Immunisation",
    description:
      "Child and adult vaccinations and travel immunisation. We follow the Kenya National Immunisation Schedule and offer a range of travel and elective vaccines.",
    whatToExpect: [
      "Child routine immunisations (BCG, OPV, DTP, MMR, etc.)",
      "Adult booster and catch-up vaccinations",
      "Travel vaccines and health advice",
    ],
  },
  {
    id: "minor-surgery",
    name: "Minor Surgery",
    description:
      "Safe in-clinic surgical procedures. We handle suturing, wound care, and minor excisions under sterile conditions without the need for hospital admission.",
    whatToExpect: [
      "Wound assessment, cleaning, and suturing",
      "Removal of cysts, lipomas, or skin tags",
      "Post-operative wound review and dressing",
    ],
  },
  {
    id: "antenatal-care",
    name: "Antenatal Care",
    description:
      "Comprehensive pregnancy monitoring and ANC visits throughout all trimesters. We support expectant mothers with clinical care and referrals to ensure a healthy pregnancy.",
    whatToExpect: [
      "Scheduled ANC visits and pregnancy monitoring",
      "Blood tests, urine analysis, and blood pressure checks",
      "Nutritional guidance, delivery planning, and hospital referrals",
    ],
  },
  {
    id: "family-planning",
    name: "Family Planning",
    description:
      "Confidential contraception counselling and administration. We offer a full range of modern family planning options tailored to each patient's needs and medical history.",
    whatToExpect: [
      "Consultation to select the best contraception method",
      "Injection, IUD insertion, implant placement, or pill prescription",
      "Follow-up and method change support",
    ],
  },
  {
    id: "pharmacy-services",
    name: "Pharmacy Services",
    description:
      "OTC and prescription medications dispensed by a qualified pharmacist. Our pharmacy is open 24 hours every day — no appointment needed.",
    whatToExpect: [
      "Prescription dispensing and medication counselling",
      "Over-the-counter medications, supplements, and health products",
      "Repeat prescription management and stock availability checks",
    ],
    is24hr: true,
  },
];
