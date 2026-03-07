import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Chimney mesh filter cleaning in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional chimney mesh filter cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-mesh-filter-cleaning-vadodara" },
  openGraph: {
    title: "Chimney mesh filter cleaning in Vadodara | VadodaraExperts",
    description: "Professional chimney mesh filter cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-mesh-filter-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chimney-mesh-filter-cleaning-vadodara" />;
}
