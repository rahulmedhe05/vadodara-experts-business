import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "pharmaceutical warehouse in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional pharmaceutical warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/pharmaceutical-warehouse-vadodara" },
  openGraph: {
    title: "pharmaceutical warehouse in Vadodara | VadodaraExperts",
    description: "Professional pharmaceutical warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/pharmaceutical-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharmaceutical-warehouse-vadodara" />;
}
