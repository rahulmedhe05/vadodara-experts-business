import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "best retail interior designer in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional best retail interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/best-retail-interior-designer-vadodara" },
  openGraph: {
    title: "best retail interior designer in Vadodara | VadodaraExperts",
    description: "Professional best retail interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/best-retail-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-retail-interior-designer-vadodara" />;
}
