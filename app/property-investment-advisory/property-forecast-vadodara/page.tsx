import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "property forecast in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional property forecast services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/property-forecast-vadodara" },
  openGraph: {
    title: "property forecast in Vadodara | VadodaraExperts",
    description: "Professional property forecast services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/property-forecast-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="property-forecast-vadodara" />;
}
