import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("cooling-tower-systems")!;

export const metadata: Metadata = {
  title: "FRP fan blade in Vadodara | Cooling Tower Systems | VadodaraExperts",
  description: "Professional frp fan blade services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/cooling-tower-systems/frp-fan-blade-vadodara" },
  openGraph: {
    title: "FRP fan blade in Vadodara | VadodaraExperts",
    description: "Professional frp fan blade services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/cooling-tower-systems/frp-fan-blade-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="frp-fan-blade-vadodara" />;
}
