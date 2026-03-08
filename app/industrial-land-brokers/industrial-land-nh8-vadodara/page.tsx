import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "industrial land NH8 in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional industrial land nh8 services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-nh8-vadodara" },
  openGraph: {
    title: "industrial land NH8 in Vadodara | VadodaraExperts",
    description: "Professional industrial land nh8 services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/industrial-land-nh8-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-land-nh8-vadodara" />;
}
