import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "industrial land near railway siding in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional industrial land near railway siding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-near-railway-siding-vadodara" },
  openGraph: {
    title: "industrial land near railway siding in Vadodara | VadodaraExperts",
    description: "Professional industrial land near railway siding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-near-railway-siding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-land-near-railway-siding-vadodara" />;
}
