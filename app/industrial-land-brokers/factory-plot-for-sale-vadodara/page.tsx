import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "factory plot for sale in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional factory plot for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/factory-plot-for-sale-vadodara" },
  openGraph: {
    title: "factory plot for sale in Vadodara | VadodaraExperts",
    description: "Professional factory plot for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/factory-plot-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-plot-for-sale-vadodara" />;
}
