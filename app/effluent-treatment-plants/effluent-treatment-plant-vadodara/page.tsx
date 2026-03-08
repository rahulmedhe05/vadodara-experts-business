import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "effluent treatment plant in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional effluent treatment plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/effluent-treatment-plant-vadodara" },
  openGraph: {
    title: "effluent treatment plant in Vadodara | VadodaraExperts",
    description: "Professional effluent treatment plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/effluent-treatment-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="effluent-treatment-plant-vadodara" />;
}
