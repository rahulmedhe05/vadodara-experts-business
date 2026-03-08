import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Bearing Dealers Whatsapp Number in Vadodara | Bearing Dealers | VadodaraExperts",
  description: "Professional bearing dealers whatsapp number services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-whatsapp-number-vadodara" },
  openGraph: {
    title: "Bearing Dealers Whatsapp Number in Vadodara | VadodaraExperts",
    description: "Professional bearing dealers whatsapp number services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/bearing-dealers/bearing-dealers-whatsapp-number-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bearing-dealers-whatsapp-number-vadodara" />;
}
