import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "FRP planter in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional frp planter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/frp-planter-vadodara" },
  openGraph: {
    title: "FRP planter in Vadodara | VadodaraExperts",
    description: "Professional frp planter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/frp-planter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="frp-planter-vadodara" />;
}
