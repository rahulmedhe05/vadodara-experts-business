import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "NRI industrial land advisory in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional nri industrial land advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/nri-industrial-land-advisory-vadodara" },
  openGraph: {
    title: "NRI industrial land advisory in Vadodara | VadodaraExperts",
    description: "Professional nri industrial land advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/nri-industrial-land-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-industrial-land-advisory-vadodara" />;
}
