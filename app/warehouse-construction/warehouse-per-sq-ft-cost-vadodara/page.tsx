import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "warehouse per sq ft cost in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional warehouse per sq ft cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/warehouse-per-sq-ft-cost-vadodara" },
  openGraph: {
    title: "warehouse per sq ft cost in Vadodara | VadodaraExperts",
    description: "Professional warehouse per sq ft cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/warehouse-per-sq-ft-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-per-sq-ft-cost-vadodara" />;
}
