import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "pharmaceutical warehouse design in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional pharmaceutical warehouse design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/pharmaceutical-warehouse-design-vadodara" },
  openGraph: {
    title: "pharmaceutical warehouse design in Vadodara | VadodaraExperts",
    description: "Professional pharmaceutical warehouse design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/pharmaceutical-warehouse-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharmaceutical-warehouse-design-vadodara" />;
}
