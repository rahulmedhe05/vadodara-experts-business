import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "factory fabrication work in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional factory fabrication work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/factory-fabrication-work-vadodara" },
  openGraph: {
    title: "factory fabrication work in Vadodara | VadodaraExperts",
    description: "Professional factory fabrication work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/factory-fabrication-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-fabrication-work-vadodara" />;
}
