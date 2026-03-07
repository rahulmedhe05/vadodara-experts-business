import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "LED lighting warehouse in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional led lighting warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/led-lighting-warehouse-vadodara" },
  openGraph: {
    title: "LED lighting warehouse in Vadodara | VadodaraExperts",
    description: "Professional led lighting warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/led-lighting-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="led-lighting-warehouse-vadodara" />;
}
