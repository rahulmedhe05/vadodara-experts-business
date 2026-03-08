import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "Large diameter borewell in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional large diameter borewell services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/large-diameter-borewell-vadodara" },
  openGraph: {
    title: "Large diameter borewell in Vadodara | VadodaraExperts",
    description: "Professional large diameter borewell services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/large-diameter-borewell-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="large-diameter-borewell-vadodara" />;
}
