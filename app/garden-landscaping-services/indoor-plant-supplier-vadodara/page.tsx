import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Indoor plant supplier in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional indoor plant supplier services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/indoor-plant-supplier-vadodara" },
  openGraph: {
    title: "Indoor plant supplier in Vadodara | VadodaraExperts",
    description: "Professional indoor plant supplier services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/indoor-plant-supplier-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="indoor-plant-supplier-vadodara" />;
}
