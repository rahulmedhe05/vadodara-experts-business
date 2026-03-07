import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "best hotel interior designer in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional best hotel interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/best-hotel-interior-designer-vadodara" },
  openGraph: {
    title: "best hotel interior designer in Vadodara | VadodaraExperts",
    description: "Professional best hotel interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/best-hotel-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-hotel-interior-designer-vadodara" />;
}
