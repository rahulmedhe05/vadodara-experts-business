import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "GIDC shed for rent in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional gidc shed for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/gidc-shed-for-rent-vadodara" },
  openGraph: {
    title: "GIDC shed for rent in Vadodara | VadodaraExperts",
    description: "Professional gidc shed for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/gidc-shed-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gidc-shed-for-rent-vadodara" />;
}
