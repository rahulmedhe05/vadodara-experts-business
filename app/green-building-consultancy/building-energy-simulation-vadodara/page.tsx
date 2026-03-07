import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "building energy simulation in Vadodara | Green Building Consultancy | VadodaraExperts",
  description: "Professional building energy simulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy/building-energy-simulation-vadodara" },
  openGraph: {
    title: "building energy simulation in Vadodara | VadodaraExperts",
    description: "Professional building energy simulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/green-building-consultancy/building-energy-simulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-energy-simulation-vadodara" />;
}
