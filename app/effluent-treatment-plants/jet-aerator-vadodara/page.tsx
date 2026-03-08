import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("effluent-treatment-plants")!;

export const metadata: Metadata = {
  title: "jet aerator in Vadodara | Effluent Treatment Plants | VadodaraExperts",
  description: "Professional jet aerator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/effluent-treatment-plants/jet-aerator-vadodara" },
  openGraph: {
    title: "jet aerator in Vadodara | VadodaraExperts",
    description: "Professional jet aerator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/effluent-treatment-plants/jet-aerator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="jet-aerator-vadodara" />;
}
