import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "NPA property advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional npa property advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/npa-property-advisory-vadodara" },
  openGraph: {
    title: "NPA property advisory in Vadodara | VadodaraExperts",
    description: "Professional npa property advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/npa-property-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="npa-property-advisory-vadodara" />;
}
