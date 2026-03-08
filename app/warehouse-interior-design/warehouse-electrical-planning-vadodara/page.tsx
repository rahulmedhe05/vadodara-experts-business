import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "warehouse electrical planning in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional warehouse electrical planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-electrical-planning-vadodara" },
  openGraph: {
    title: "warehouse electrical planning in Vadodara | VadodaraExperts",
    description: "Professional warehouse electrical planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-electrical-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-electrical-planning-vadodara" />;
}
