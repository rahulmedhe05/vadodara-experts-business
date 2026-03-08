import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plc-programming-services")!;

export const metadata: Metadata = {
  title: "sequential function chart in Vadodara | PLC Programming Services | VadodaraExperts",
  description: "Professional sequential function chart services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plc-programming-services/sequential-function-chart-vadodara" },
  openGraph: {
    title: "sequential function chart in Vadodara | VadodaraExperts",
    description: "Professional sequential function chart services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plc-programming-services/sequential-function-chart-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sequential-function-chart-vadodara" />;
}
