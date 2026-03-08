import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Seasonal flower planting in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional seasonal flower planting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/seasonal-flower-planting-vadodara" },
  openGraph: {
    title: "Seasonal flower planting in Vadodara | VadodaraExperts",
    description: "Professional seasonal flower planting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/seasonal-flower-planting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="seasonal-flower-planting-vadodara" />;
}
