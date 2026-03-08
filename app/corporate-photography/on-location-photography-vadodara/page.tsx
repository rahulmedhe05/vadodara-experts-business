import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "On location photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional on location photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/on-location-photography-vadodara" },
  openGraph: {
    title: "On location photography in Vadodara | VadodaraExperts",
    description: "Professional on location photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/on-location-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="on-location-photography-vadodara" />;
}
