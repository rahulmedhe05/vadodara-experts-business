import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Concrete planter in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional concrete planter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/concrete-planter-vadodara" },
  openGraph: {
    title: "Concrete planter in Vadodara | VadodaraExperts",
    description: "Professional concrete planter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/concrete-planter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-planter-vadodara" />;
}
