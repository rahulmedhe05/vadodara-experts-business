import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "free trade warehouse in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional free trade warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/free-trade-warehouse-vadodara" },
  openGraph: {
    title: "free trade warehouse in Vadodara | VadodaraExperts",
    description: "Professional free trade warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/free-trade-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="free-trade-warehouse-vadodara" />;
}
