import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "warehouse weighbridge area in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional warehouse weighbridge area services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-weighbridge-area-vadodara" },
  openGraph: {
    title: "warehouse weighbridge area in Vadodara | VadodaraExperts",
    description: "Professional warehouse weighbridge area services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-weighbridge-area-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-weighbridge-area-vadodara" />;
}
