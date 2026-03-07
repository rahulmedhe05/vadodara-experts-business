import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "Commercial Property Brokers in Vadodara | VadodaraExperts",
  description: "Find the best commercial property brokers in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers" },
  openGraph: {
    title: "Commercial Property Brokers in Vadodara | VadodaraExperts",
    description: "Find the best commercial property brokers in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/commercial-property-brokers",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
