import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Modular kitchen price per sqft in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional modular kitchen price per sqft services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/modular-kitchen-price-per-sqft-vadodara" },
  openGraph: {
    title: "Modular kitchen price per sqft in Vadodara | VadodaraExperts",
    description: "Professional modular kitchen price per sqft services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/modular-kitchen-price-per-sqft-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-kitchen-price-per-sqft-vadodara" />;
}
