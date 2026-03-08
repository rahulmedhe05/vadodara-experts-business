import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Hedge planting in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional hedge planting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/hedge-planting-vadodara" },
  openGraph: {
    title: "Hedge planting in Vadodara | VadodaraExperts",
    description: "Professional hedge planting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/hedge-planting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hedge-planting-vadodara" />;
}
