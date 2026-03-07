import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "multi-tier racking in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional multi-tier racking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/multi-tier-racking-vadodara" },
  openGraph: {
    title: "multi-tier racking in Vadodara | VadodaraExperts",
    description: "Professional multi-tier racking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/multi-tier-racking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-tier-racking-vadodara" />;
}
