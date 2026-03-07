import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "property deed drafting in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional property deed drafting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/property-deed-drafting-vadodara" },
  openGraph: {
    title: "property deed drafting in Vadodara | VadodaraExperts",
    description: "Professional property deed drafting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/property-deed-drafting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-deed-drafting-vadodara" />;
}
