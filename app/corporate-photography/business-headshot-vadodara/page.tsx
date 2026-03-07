import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Business headshot in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional business headshot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/business-headshot-vadodara" },
  openGraph: {
    title: "Business headshot in Vadodara | VadodaraExperts",
    description: "Professional business headshot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/business-headshot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-headshot-vadodara" />;
}
