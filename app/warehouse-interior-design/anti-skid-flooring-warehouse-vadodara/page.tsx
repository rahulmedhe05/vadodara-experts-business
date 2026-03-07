import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "anti-skid flooring warehouse in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional anti-skid flooring warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/anti-skid-flooring-warehouse-vadodara" },
  openGraph: {
    title: "anti-skid flooring warehouse in Vadodara | VadodaraExperts",
    description: "Professional anti-skid flooring warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/anti-skid-flooring-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="anti-skid-flooring-warehouse-vadodara" />;
}
