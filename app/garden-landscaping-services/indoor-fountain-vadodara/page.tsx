import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("garden-landscaping-services")!;

export const metadata: Metadata = {
  title: "Indoor fountain in Vadodara | Garden Landscaping Services | VadodaraExperts",
  description: "Professional indoor fountain services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/garden-landscaping-services/indoor-fountain-vadodara" },
  openGraph: {
    title: "Indoor fountain in Vadodara | VadodaraExperts",
    description: "Professional indoor fountain services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/garden-landscaping-services/indoor-fountain-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="indoor-fountain-vadodara" />;
}
