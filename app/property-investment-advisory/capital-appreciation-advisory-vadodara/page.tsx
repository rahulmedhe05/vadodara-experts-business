import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "capital appreciation advisory in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional capital appreciation advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/capital-appreciation-advisory-vadodara" },
  openGraph: {
    title: "capital appreciation advisory in Vadodara | VadodaraExperts",
    description: "Professional capital appreciation advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/capital-appreciation-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="capital-appreciation-advisory-vadodara" />;
}
