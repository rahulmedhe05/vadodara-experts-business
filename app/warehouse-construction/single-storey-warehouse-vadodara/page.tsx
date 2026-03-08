import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "single storey warehouse in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional single storey warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/single-storey-warehouse-vadodara" },
  openGraph: {
    title: "single storey warehouse in Vadodara | VadodaraExperts",
    description: "Professional single storey warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/single-storey-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="single-storey-warehouse-vadodara" />;
}
