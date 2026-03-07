import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Water divining in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional water divining services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/water-divining-vadodara" },
  openGraph: {
    title: "Water divining in Vadodara | VadodaraExperts",
    description: "Professional water divining services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/water-divining-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-divining-vadodara" />;
}
