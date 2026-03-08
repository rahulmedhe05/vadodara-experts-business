import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "counter flow cooling tower in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional counter flow cooling tower services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/counter-flow-cooling-tower-vadodara" },
  openGraph: {
    title: "counter flow cooling tower in Vadodara | VadodaraExperts",
    description: "Professional counter flow cooling tower services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/counter-flow-cooling-tower-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="counter-flow-cooling-tower-vadodara" />;
}
