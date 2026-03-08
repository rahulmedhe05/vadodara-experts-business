import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Chimney carbon filter price in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional chimney carbon filter price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-carbon-filter-price-vadodara" },
  openGraph: {
    title: "Chimney carbon filter price in Vadodara | VadodaraExperts",
    description: "Professional chimney carbon filter price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/chimney-carbon-filter-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chimney-carbon-filter-price-vadodara" />;
}
