import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Borewell water level check in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional borewell water level check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/borewell-water-level-check-vadodara" },
  openGraph: {
    title: "Borewell water level check in Vadodara | VadodaraExperts",
    description: "Professional borewell water level check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/borewell-water-level-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borewell-water-level-check-vadodara" />;
}
