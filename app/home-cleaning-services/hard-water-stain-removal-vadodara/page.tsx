import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Hard water stain removal in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional hard water stain removal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/hard-water-stain-removal-vadodara" },
  openGraph: {
    title: "Hard water stain removal in Vadodara | VadodaraExperts",
    description: "Professional hard water stain removal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/hard-water-stain-removal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hard-water-stain-removal-vadodara" />;
}
