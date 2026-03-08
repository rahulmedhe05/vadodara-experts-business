import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "rental yield advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional rental yield advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/rental-yield-advisory-vadodara" },
  openGraph: {
    title: "rental yield advisory in Vadodara | VadodaraExperts",
    description: "Professional rental yield advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/rental-yield-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rental-yield-advisory-vadodara" />;
}
