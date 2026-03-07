import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Modular kitchen manufacturer in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional modular kitchen manufacturer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/modular-kitchen-manufacturer-vadodara" },
  openGraph: {
    title: "Modular kitchen manufacturer in Vadodara | VadodaraExperts",
    description: "Professional modular kitchen manufacturer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/modular-kitchen-manufacturer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-kitchen-manufacturer-vadodara" />;
}
