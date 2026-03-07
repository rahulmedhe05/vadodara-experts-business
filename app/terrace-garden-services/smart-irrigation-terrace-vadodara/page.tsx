import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("terrace-garden-services")!;

export const metadata: Metadata = {
  title: "Smart irrigation terrace in Vadodara | Terrace Garden Services | VadodaraExperts",
  description: "Professional smart irrigation terrace services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/terrace-garden-services/smart-irrigation-terrace-vadodara" },
  openGraph: {
    title: "Smart irrigation terrace in Vadodara | VadodaraExperts",
    description: "Professional smart irrigation terrace services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/terrace-garden-services/smart-irrigation-terrace-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-irrigation-terrace-vadodara" />;
}
