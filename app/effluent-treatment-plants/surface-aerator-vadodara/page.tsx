import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "surface aerator in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional surface aerator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/surface-aerator-vadodara" },
  openGraph: {
    title: "surface aerator in Vadodara | VadodaraExperts",
    description: "Professional surface aerator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/surface-aerator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surface-aerator-vadodara" />;
}
