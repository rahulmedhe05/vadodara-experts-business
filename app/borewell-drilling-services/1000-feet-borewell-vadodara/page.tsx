import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("borewell-drilling-services")!;

export const metadata: Metadata = {
  title: "1000 feet borewell in Vadodara | Borewell Drilling Services | VadodaraExperts",
  description: "Professional 1000 feet borewell services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/borewell-drilling-services/1000-feet-borewell-vadodara" },
  openGraph: {
    title: "1000 feet borewell in Vadodara | VadodaraExperts",
    description: "Professional 1000 feet borewell services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/borewell-drilling-services/1000-feet-borewell-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="1000-feet-borewell-vadodara" />;
}
