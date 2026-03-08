import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "co-working space in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional co-working space services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/co-working-space-vadodara" },
  openGraph: {
    title: "co-working space in Vadodara | VadodaraExperts",
    description: "Professional co-working space services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/co-working-space-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co-working-space-vadodara" />;
}
