import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-property-brokers")!;

export const metadata: Metadata = {
  title: "industrial property railway siding in Vadodara | Industrial Property Brokers | VadodaraExperts",
  description: "Professional industrial property railway siding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-property-brokers/industrial-property-railway-siding-vadodara" },
  openGraph: {
    title: "industrial property railway siding in Vadodara | VadodaraExperts",
    description: "Professional industrial property railway siding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-property-brokers/industrial-property-railway-siding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-property-railway-siding-vadodara" />;
}
