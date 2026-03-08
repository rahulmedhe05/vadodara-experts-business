import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "industrial gala for rent in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional industrial gala for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/industrial-gala-for-rent-vadodara" },
  openGraph: {
    title: "industrial gala for rent in Vadodara | VadodaraExperts",
    description: "Professional industrial gala for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/industrial-gala-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-gala-for-rent-vadodara" />;
}
