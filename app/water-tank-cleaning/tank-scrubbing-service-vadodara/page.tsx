import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-tank-cleaning")!;

export const metadata: Metadata = {
  title: "Tank scrubbing service in Vadodara | Water Tank Cleaning | VadodaraExperts",
  description: "Professional tank scrubbing service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-tank-cleaning/tank-scrubbing-service-vadodara" },
  openGraph: {
    title: "Tank scrubbing service in Vadodara | VadodaraExperts",
    description: "Professional tank scrubbing service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-tank-cleaning/tank-scrubbing-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tank-scrubbing-service-vadodara" />;
}
