import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "HDPE casing pipe in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional hdpe casing pipe services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/hdpe-casing-pipe-vadodara" },
  openGraph: {
    title: "HDPE casing pipe in Vadodara | VadodaraExperts",
    description: "Professional hdpe casing pipe services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/hdpe-casing-pipe-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hdpe-casing-pipe-vadodara" />;
}
