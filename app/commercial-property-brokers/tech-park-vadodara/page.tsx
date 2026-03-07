import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "tech park in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional tech park services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/tech-park-vadodara" },
  openGraph: {
    title: "tech park in Vadodara | VadodaraExperts",
    description: "Professional tech park services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/tech-park-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tech-park-vadodara" />;
}
