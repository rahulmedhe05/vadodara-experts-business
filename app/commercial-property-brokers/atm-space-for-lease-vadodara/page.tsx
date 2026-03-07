import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "ATM space for lease in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional atm space for lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/atm-space-for-lease-vadodara" },
  openGraph: {
    title: "ATM space for lease in Vadodara | VadodaraExperts",
    description: "Professional atm space for lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/atm-space-for-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="atm-space-for-lease-vadodara" />;
}
