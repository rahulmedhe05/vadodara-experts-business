import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Borewell water purifier in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional borewell water purifier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/borewell-water-purifier-vadodara" },
  openGraph: {
    title: "Borewell water purifier in Vadodara | VadodaraExperts",
    description: "Professional borewell water purifier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/borewell-water-purifier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="borewell-water-purifier-vadodara" />;
}
