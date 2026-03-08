import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "warehouse floor marking in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional warehouse floor marking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-floor-marking-vadodara" },
  openGraph: {
    title: "warehouse floor marking in Vadodara | VadodaraExperts",
    description: "Professional warehouse floor marking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-floor-marking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-floor-marking-vadodara" />;
}
