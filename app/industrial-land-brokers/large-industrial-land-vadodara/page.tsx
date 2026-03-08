import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "large industrial land in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional large industrial land services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/large-industrial-land-vadodara" },
  openGraph: {
    title: "large industrial land in Vadodara | VadodaraExperts",
    description: "Professional large industrial land services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/large-industrial-land-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="large-industrial-land-vadodara" />;
}
