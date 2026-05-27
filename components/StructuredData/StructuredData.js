import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER, INSTAGRAM_URL } from "@/utils/constants";

export function StructuredData() {
  const payload = {
    "@context": "https://schema.org",
    "@type": "MobilePhoneStore",
    name: SITE_NAME,
    url: SITE_URL,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&q=80",
    description:
      "Loja especializada em iPhones premium com garantia, nota fiscal e atendimento via WhatsApp.",
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    sameAs: [INSTAGRAM_URL],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
