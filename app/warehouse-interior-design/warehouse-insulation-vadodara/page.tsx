import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "warehouse insulation in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional warehouse insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-insulation-vadodara" },
  openGraph: {
    title: "warehouse insulation in Vadodara | VadodaraExperts",
    description: "Professional warehouse insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-insulation-vadodara" />;
}
