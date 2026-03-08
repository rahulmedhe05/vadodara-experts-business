import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Construction site water tanker in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional construction site water tanker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/construction-site-water-tanker-vadodara" },
  openGraph: {
    title: "Construction site water tanker in Vadodara | VadodaraExperts",
    description: "Professional construction site water tanker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/construction-site-water-tanker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-site-water-tanker-vadodara" />;
}
