import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Clean water tanker in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional clean water tanker services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/clean-water-tanker-vadodara" },
  openGraph: {
    title: "Clean water tanker in Vadodara | VadodaraExperts",
    description: "Professional clean water tanker services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/clean-water-tanker-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clean-water-tanker-vadodara" />;
}
