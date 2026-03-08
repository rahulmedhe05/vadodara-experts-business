import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "title search advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional title search advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/title-search-advisory-vadodara" },
  openGraph: {
    title: "title search advisory in Vadodara | VadodaraExperts",
    description: "Professional title search advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/title-search-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="title-search-advisory-vadodara" />;
}
