import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "warehouse concrete flooring in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional warehouse concrete flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-concrete-flooring-vadodara" },
  openGraph: {
    title: "warehouse concrete flooring in Vadodara | VadodaraExperts",
    description: "Professional warehouse concrete flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-concrete-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-concrete-flooring-vadodara" />;
}
