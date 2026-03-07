import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "zone conversion consultancy in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional zone conversion consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/zone-conversion-consultancy-vadodara" },
  openGraph: {
    title: "zone conversion consultancy in Vadodara | VadodaraExperts",
    description: "Professional zone conversion consultancy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/zone-conversion-consultancy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zone-conversion-consultancy-vadodara" />;
}
