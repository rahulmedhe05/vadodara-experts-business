import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "Water purifier noise problem in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional water purifier noise problem services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/water-purifier-noise-problem-vadodara" },
  openGraph: {
    title: "Water purifier noise problem in Vadodara | VadodaraExperts",
    description: "Professional water purifier noise problem services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/water-purifier-noise-problem-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-purifier-noise-problem-vadodara" />;
}
