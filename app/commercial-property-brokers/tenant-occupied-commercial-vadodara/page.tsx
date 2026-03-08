import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-property-brokers")!;

export const metadata: Metadata = {
  title: "tenant occupied commercial in Vadodara | Commercial Property Brokers | VadodaraExperts",
  description: "Professional tenant occupied commercial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-property-brokers/tenant-occupied-commercial-vadodara" },
  openGraph: {
    title: "tenant occupied commercial in Vadodara | VadodaraExperts",
    description: "Professional tenant occupied commercial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-property-brokers/tenant-occupied-commercial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tenant-occupied-commercial-vadodara" />;
}
