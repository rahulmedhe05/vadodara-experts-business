import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "property advisory fee in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional property advisory fee services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/property-advisory-fee-vadodara" },
  openGraph: {
    title: "property advisory fee in Vadodara | VadodaraExperts",
    description: "Professional property advisory fee services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/property-advisory-fee-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-advisory-fee-vadodara" />;
}
