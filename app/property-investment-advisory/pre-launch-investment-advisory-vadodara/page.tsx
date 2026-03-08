import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "pre-launch investment advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional pre-launch investment advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/pre-launch-investment-advisory-vadodara" },
  openGraph: {
    title: "pre-launch investment advisory in Vadodara | VadodaraExperts",
    description: "Professional pre-launch investment advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/pre-launch-investment-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-launch-investment-advisory-vadodara" />;
}
