import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "GRC planter in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional grc planter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/grc-planter-vadodara" },
  openGraph: {
    title: "GRC planter in Vadodara | VadodaraExperts",
    description: "Professional grc planter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/grc-planter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="grc-planter-vadodara" />;
}
