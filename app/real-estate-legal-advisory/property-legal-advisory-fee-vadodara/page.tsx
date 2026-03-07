import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "property legal advisory fee in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional property legal advisory fee services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/property-legal-advisory-fee-vadodara" },
  openGraph: {
    title: "property legal advisory fee in Vadodara | VadodaraExperts",
    description: "Professional property legal advisory fee services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/property-legal-advisory-fee-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-legal-advisory-fee-vadodara" />;
}
