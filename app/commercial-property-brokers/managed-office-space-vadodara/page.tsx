import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "managed office space in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional managed office space services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/managed-office-space-vadodara" },
  openGraph: {
    title: "managed office space in Vadodara | VadodaraExperts",
    description: "Professional managed office space services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/managed-office-space-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="managed-office-space-vadodara" />;
}
