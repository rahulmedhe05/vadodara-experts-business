import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Bathroom waterproofing without breaking tiles in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional bathroom waterproofing without breaking tiles services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/bathroom-waterproofing-without-breaking-tiles-vadodara" },
  openGraph: {
    title: "Bathroom waterproofing without breaking tiles in Vadodara | VadodaraExperts",
    description: "Professional bathroom waterproofing without breaking tiles services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/bathroom-waterproofing-without-breaking-tiles-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bathroom-waterproofing-without-breaking-tiles-vadodara" />;
}
