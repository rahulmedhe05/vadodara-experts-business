import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Water body garden in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional water body garden services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/water-body-garden-vadodara" },
  openGraph: {
    title: "Water body garden in Vadodara | VadodaraExperts",
    description: "Professional water body garden services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/water-body-garden-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-body-garden-vadodara" />;
}
