import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "manufacturing zone land in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional manufacturing zone land services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/manufacturing-zone-land-vadodara" },
  openGraph: {
    title: "manufacturing zone land in Vadodara | VadodaraExperts",
    description: "Professional manufacturing zone land services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/manufacturing-zone-land-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="manufacturing-zone-land-vadodara" />;
}
