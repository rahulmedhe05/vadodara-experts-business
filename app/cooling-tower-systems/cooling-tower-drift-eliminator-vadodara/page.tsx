import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "cooling tower drift eliminator in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional cooling tower drift eliminator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/cooling-tower-drift-eliminator-vadodara" },
  openGraph: {
    title: "cooling tower drift eliminator in Vadodara | VadodaraExperts",
    description: "Professional cooling tower drift eliminator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/cooling-tower-drift-eliminator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cooling-tower-drift-eliminator-vadodara" />;
}
