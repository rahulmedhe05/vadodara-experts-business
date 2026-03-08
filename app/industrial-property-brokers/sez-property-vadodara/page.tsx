import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "SEZ property in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional sez property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/sez-property-vadodara" },
  openGraph: {
    title: "SEZ property in Vadodara | VadodaraExperts",
    description: "Professional sez property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/sez-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sez-property-vadodara" />;
}
