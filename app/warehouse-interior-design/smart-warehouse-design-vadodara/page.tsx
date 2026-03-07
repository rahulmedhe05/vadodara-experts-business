import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "smart warehouse design in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional smart warehouse design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/smart-warehouse-design-vadodara" },
  openGraph: {
    title: "smart warehouse design in Vadodara | VadodaraExperts",
    description: "Professional smart warehouse design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/smart-warehouse-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-warehouse-design-vadodara" />;
}
