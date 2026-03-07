import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "cantilever racking in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional cantilever racking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/cantilever-racking-vadodara" },
  openGraph: {
    title: "cantilever racking in Vadodara | VadodaraExperts",
    description: "Professional cantilever racking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/cantilever-racking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cantilever-racking-vadodara" />;
}
