import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "forced draft cooling tower in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional forced draft cooling tower services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/forced-draft-cooling-tower-vadodara" },
  openGraph: {
    title: "forced draft cooling tower in Vadodara | VadodaraExperts",
    description: "Professional forced draft cooling tower services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/forced-draft-cooling-tower-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="forced-draft-cooling-tower-vadodara" />;
}
