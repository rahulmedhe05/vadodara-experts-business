import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "distressed asset advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional distressed asset advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/distressed-asset-advisory-vadodara" },
  openGraph: {
    title: "distressed asset advisory in Vadodara | VadodaraExperts",
    description: "Professional distressed asset advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/distressed-asset-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="distressed-asset-advisory-vadodara" />;
}
