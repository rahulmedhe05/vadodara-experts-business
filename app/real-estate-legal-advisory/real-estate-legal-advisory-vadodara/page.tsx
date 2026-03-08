import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "real estate legal advisory in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional real estate legal advisory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/real-estate-legal-advisory-vadodara" },
  openGraph: {
    title: "real estate legal advisory in Vadodara | VadodaraExperts",
    description: "Professional real estate legal advisory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/real-estate-legal-advisory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="real-estate-legal-advisory-vadodara" />;
}
