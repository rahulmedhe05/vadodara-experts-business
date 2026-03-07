import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "cooling tower cost in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional cooling tower cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/cooling-tower-cost-vadodara" },
  openGraph: {
    title: "cooling tower cost in Vadodara | VadodaraExperts",
    description: "Professional cooling tower cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/cooling-tower-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cooling-tower-cost-vadodara" />;
}
