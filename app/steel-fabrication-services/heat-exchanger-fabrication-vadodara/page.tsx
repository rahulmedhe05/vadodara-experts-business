import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "heat exchanger fabrication in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional heat exchanger fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/heat-exchanger-fabrication-vadodara" },
  openGraph: {
    title: "heat exchanger fabrication in Vadodara | VadodaraExperts",
    description: "Professional heat exchanger fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/heat-exchanger-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-exchanger-fabrication-vadodara" />;
}
