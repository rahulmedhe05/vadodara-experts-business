import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "chemical storage in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional chemical storage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/chemical-storage-vadodara" },
  openGraph: {
    title: "chemical storage in Vadodara | VadodaraExperts",
    description: "Professional chemical storage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/chemical-storage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-storage-vadodara" />;
}
