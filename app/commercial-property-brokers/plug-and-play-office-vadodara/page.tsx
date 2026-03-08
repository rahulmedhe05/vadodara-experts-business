import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "plug and play office in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional plug and play office services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/plug-and-play-office-vadodara" },
  openGraph: {
    title: "plug and play office in Vadodara | VadodaraExperts",
    description: "Professional plug and play office services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/plug-and-play-office-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plug-and-play-office-vadodara" />;
}
