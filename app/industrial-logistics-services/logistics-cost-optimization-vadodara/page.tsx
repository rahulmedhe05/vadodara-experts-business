import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-logistics-services")!;

export const metadata: Metadata = {
  title: "logistics cost optimization in Vadodara | Industrial Logistics Services | VadodaraExperts",
  description: "Professional logistics cost optimization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-logistics-services/logistics-cost-optimization-vadodara" },
  openGraph: {
    title: "logistics cost optimization in Vadodara | VadodaraExperts",
    description: "Professional logistics cost optimization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-logistics-services/logistics-cost-optimization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="logistics-cost-optimization-vadodara" />;
}
