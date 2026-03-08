import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "built to suit industrial in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional built to suit industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/built-to-suit-industrial-vadodara" },
  openGraph: {
    title: "built to suit industrial in Vadodara | VadodaraExperts",
    description: "Professional built to suit industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/built-to-suit-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="built-to-suit-industrial-vadodara" />;
}
