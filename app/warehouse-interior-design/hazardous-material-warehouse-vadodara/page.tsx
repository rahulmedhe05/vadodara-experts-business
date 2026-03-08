import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "hazardous material warehouse in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional hazardous material warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/hazardous-material-warehouse-vadodara" },
  openGraph: {
    title: "hazardous material warehouse in Vadodara | VadodaraExperts",
    description: "Professional hazardous material warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/hazardous-material-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hazardous-material-warehouse-vadodara" />;
}
