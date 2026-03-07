import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "logistics park in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional logistics park services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/logistics-park-vadodara" },
  openGraph: {
    title: "logistics park in Vadodara | VadodaraExperts",
    description: "Professional logistics park services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/logistics-park-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logistics-park-vadodara" />;
}
