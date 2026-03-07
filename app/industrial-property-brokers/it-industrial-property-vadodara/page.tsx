import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "IT industrial property in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional it industrial property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/it-industrial-property-vadodara" },
  openGraph: {
    title: "IT industrial property in Vadodara | VadodaraExperts",
    description: "Professional it industrial property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/it-industrial-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="it-industrial-property-vadodara" />;
}
