import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "quality check area in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional quality check area services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/quality-check-area-vadodara" },
  openGraph: {
    title: "quality check area in Vadodara | VadodaraExperts",
    description: "Professional quality check area services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/quality-check-area-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quality-check-area-vadodara" />;
}
