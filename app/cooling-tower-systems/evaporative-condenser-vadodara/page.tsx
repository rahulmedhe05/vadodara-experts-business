import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "evaporative condenser in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional evaporative condenser services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/evaporative-condenser-vadodara" },
  openGraph: {
    title: "evaporative condenser in Vadodara | VadodaraExperts",
    description: "Professional evaporative condenser services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/evaporative-condenser-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="evaporative-condenser-vadodara" />;
}
