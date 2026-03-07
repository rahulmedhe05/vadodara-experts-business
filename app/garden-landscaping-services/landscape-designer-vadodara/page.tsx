import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Landscape designer in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional landscape designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/landscape-designer-vadodara" },
  openGraph: {
    title: "Landscape designer in Vadodara | VadodaraExperts",
    description: "Professional landscape designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/landscape-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="landscape-designer-vadodara" />;
}
