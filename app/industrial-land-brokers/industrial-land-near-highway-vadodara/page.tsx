import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "industrial land near highway in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional industrial land near highway services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-near-highway-vadodara" },
  openGraph: {
    title: "industrial land near highway in Vadodara | VadodaraExperts",
    description: "Professional industrial land near highway services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-near-highway-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-land-near-highway-vadodara" />;
}
