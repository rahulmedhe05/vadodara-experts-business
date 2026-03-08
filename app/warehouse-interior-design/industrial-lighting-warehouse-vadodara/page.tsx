import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "industrial lighting warehouse in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional industrial lighting warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/industrial-lighting-warehouse-vadodara" },
  openGraph: {
    title: "industrial lighting warehouse in Vadodara | VadodaraExperts",
    description: "Professional industrial lighting warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/industrial-lighting-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-lighting-warehouse-vadodara" />;
}
