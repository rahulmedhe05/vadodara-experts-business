import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "pharma warehouse in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional pharma warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/pharma-warehouse-vadodara" },
  openGraph: {
    title: "pharma warehouse in Vadodara | VadodaraExperts",
    description: "Professional pharma warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/pharma-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharma-warehouse-vadodara" />;
}
