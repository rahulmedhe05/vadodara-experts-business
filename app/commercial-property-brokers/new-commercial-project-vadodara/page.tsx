import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "new commercial project in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional new commercial project services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/new-commercial-project-vadodara" },
  openGraph: {
    title: "new commercial project in Vadodara | VadodaraExperts",
    description: "Professional new commercial project services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/new-commercial-project-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="new-commercial-project-vadodara" />;
}
