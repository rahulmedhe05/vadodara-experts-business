import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "shop solar panel in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional shop solar panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/shop-solar-panel-vadodara" },
  openGraph: {
    title: "shop solar panel in Vadodara | VadodaraExperts",
    description: "Professional shop solar panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/shop-solar-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shop-solar-panel-vadodara" />;
}
