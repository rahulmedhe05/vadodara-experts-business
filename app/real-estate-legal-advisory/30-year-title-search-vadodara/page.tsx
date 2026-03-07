import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-legal-advisory")!;

export const metadata: Metadata = {
  title: "30 year title search in Vadodara | Real Estate Legal Advisory | VadodaraExperts",
  description: "Professional 30 year title search services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-legal-advisory/30-year-title-search-vadodara" },
  openGraph: {
    title: "30 year title search in Vadodara | VadodaraExperts",
    description: "Professional 30 year title search services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-legal-advisory/30-year-title-search-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="30-year-title-search-vadodara" />;
}
