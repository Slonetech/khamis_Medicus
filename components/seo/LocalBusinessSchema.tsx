export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalOrganization"],
    name: "Kham Medicus Care LTD",
    description:
      "Professional clinic and 24-hour pharmacy in Komarock Plaza, Spine Road, Nairobi North. Outpatient, emergency, antenatal, family planning, and pharmacy services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Komarock Plaza, Spine Road",
      addressLocality: "Nairobi North",
      addressCountry: "KE",
    },
    telephone: "+254114461958",
    openingHours: "Mo-Su 00:00-24:00",
    url: "https://khamismedicuscare.co.ke",
    sameAs: [],
    hasMap: "https://maps.google.com/?q=Komarock+Plaza+Spine+Road+Nairobi",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
