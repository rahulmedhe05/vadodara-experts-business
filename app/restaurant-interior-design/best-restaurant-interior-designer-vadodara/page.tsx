import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("restaurant-interior-design")!;

export const metadata: Metadata = {
  title: "best restaurant interior designer in Vadodara | Restaurant Interior Design | VadodaraExperts",
  description: "Professional best restaurant interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/restaurant-interior-design/best-restaurant-interior-designer-vadodara" },
  openGraph: {
    title: "best restaurant interior designer in Vadodara | VadodaraExperts",
    description: "Professional best restaurant interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/restaurant-interior-design/best-restaurant-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-restaurant-interior-designer-vadodara" />;
}
