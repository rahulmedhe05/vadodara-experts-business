import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-cleaning-services")!;

export const metadata: Metadata = {
  title: "Stone floor restoration in Vadodara | Home Cleaning Services | VadodaraExperts",
  description: "Professional stone floor restoration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-cleaning-services/stone-floor-restoration-vadodara" },
  openGraph: {
    title: "Stone floor restoration in Vadodara | VadodaraExperts",
    description: "Professional stone floor restoration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-cleaning-services/stone-floor-restoration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stone-floor-restoration-vadodara" />;
}
