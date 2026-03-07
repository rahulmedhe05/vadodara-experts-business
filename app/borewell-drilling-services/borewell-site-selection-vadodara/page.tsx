import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Borewell site selection in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional borewell site selection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/borewell-site-selection-vadodara" },
  openGraph: {
    title: "Borewell site selection in Vadodara | VadodaraExperts",
    description: "Professional borewell site selection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/borewell-site-selection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borewell-site-selection-vadodara" />;
}
