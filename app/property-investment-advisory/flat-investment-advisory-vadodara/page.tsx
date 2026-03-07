import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "flat investment advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional flat investment advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/flat-investment-advisory-vadodara" },
  openGraph: {
    title: "flat investment advisory in Vadodara | VadodaraExperts",
    description: "Professional flat investment advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/flat-investment-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flat-investment-advisory-vadodara" />;
}
