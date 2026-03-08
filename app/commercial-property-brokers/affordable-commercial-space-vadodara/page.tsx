import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "affordable commercial space in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional affordable commercial space services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/affordable-commercial-space-vadodara" },
  openGraph: {
    title: "affordable commercial space in Vadodara | VadodaraExperts",
    description: "Professional affordable commercial space services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/affordable-commercial-space-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-commercial-space-vadodara" />;
}
