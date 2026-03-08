import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sewage-treatment-plants")!;

export const metadata: Metadata = {
  title: "grey water recycling in Vadodara | Sewage Treatment Plants | VadodaraExperts",
  description: "Professional grey water recycling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sewage-treatment-plants/grey-water-recycling-vadodara" },
  openGraph: {
    title: "grey water recycling in Vadodara | VadodaraExperts",
    description: "Professional grey water recycling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sewage-treatment-plants/grey-water-recycling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grey-water-recycling-vadodara" />;
}
