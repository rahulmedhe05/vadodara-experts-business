import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "aluminium fan blade in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional aluminium fan blade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/aluminium-fan-blade-vadodara" },
  openGraph: {
    title: "aluminium fan blade in Vadodara | VadodaraExperts",
    description: "Professional aluminium fan blade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/aluminium-fan-blade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aluminium-fan-blade-vadodara" />;
}
