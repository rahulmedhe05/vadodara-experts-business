import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("corporate-photography")!;

export const metadata: Metadata = {
  title: "Family portrait in Vadodara | Corporate Photography | VadodaraExperts",
  description: "Professional family portrait services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/corporate-photography/family-portrait-vadodara" },
  openGraph: {
    title: "Family portrait in Vadodara | VadodaraExperts",
    description: "Professional family portrait services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/corporate-photography/family-portrait-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="family-portrait-vadodara" />;
}
