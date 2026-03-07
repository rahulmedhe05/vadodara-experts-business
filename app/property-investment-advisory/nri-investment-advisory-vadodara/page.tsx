import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "NRI investment advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional nri investment advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/nri-investment-advisory-vadodara" },
  openGraph: {
    title: "NRI investment advisory in Vadodara | VadodaraExperts",
    description: "Professional nri investment advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/nri-investment-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-investment-advisory-vadodara" />;
}
