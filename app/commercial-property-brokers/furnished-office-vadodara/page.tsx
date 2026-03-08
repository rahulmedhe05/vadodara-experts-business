import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "furnished office in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional furnished office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/furnished-office-vadodara" },
  openGraph: {
    title: "furnished office in Vadodara | VadodaraExperts",
    description: "Professional furnished office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/furnished-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="furnished-office-vadodara" />;
}
