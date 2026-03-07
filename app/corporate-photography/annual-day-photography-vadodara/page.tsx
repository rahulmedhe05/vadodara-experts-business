import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Annual day photography in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional annual day photography services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/annual-day-photography-vadodara" },
  openGraph: {
    title: "Annual day photography in Vadodara | VadodaraExperts",
    description: "Professional annual day photography services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/annual-day-photography-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="annual-day-photography-vadodara" />;
}
