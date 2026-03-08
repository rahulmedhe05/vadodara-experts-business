import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Japanese garden design in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional japanese garden design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/japanese-garden-design-vadodara" },
  openGraph: {
    title: "Japanese garden design in Vadodara | VadodaraExperts",
    description: "Professional japanese garden design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/japanese-garden-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="japanese-garden-design-vadodara" />;
}
