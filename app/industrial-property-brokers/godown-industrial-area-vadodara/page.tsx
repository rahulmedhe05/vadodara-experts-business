import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "godown industrial area in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional godown industrial area services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/godown-industrial-area-vadodara" },
  openGraph: {
    title: "godown industrial area in Vadodara | VadodaraExperts",
    description: "Professional godown industrial area services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/godown-industrial-area-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="godown-industrial-area-vadodara" />;
}
