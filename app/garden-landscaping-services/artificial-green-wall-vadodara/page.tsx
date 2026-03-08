import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Artificial green wall in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional artificial green wall services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/artificial-green-wall-vadodara" },
  openGraph: {
    title: "Artificial green wall in Vadodara | VadodaraExperts",
    description: "Professional artificial green wall services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/artificial-green-wall-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="artificial-green-wall-vadodara" />;
}
