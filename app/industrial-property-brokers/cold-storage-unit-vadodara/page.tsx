import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "cold storage unit in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional cold storage unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/cold-storage-unit-vadodara" },
  openGraph: {
    title: "cold storage unit in Vadodara | VadodaraExperts",
    description: "Professional cold storage unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/cold-storage-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-storage-unit-vadodara" />;
}
