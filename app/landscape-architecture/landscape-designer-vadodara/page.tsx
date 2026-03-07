import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Landscape designer in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional landscape designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/landscape-designer-vadodara" },
  openGraph: {
    title: "Landscape designer in Vadodara | VadodaraExperts",
    description: "Professional landscape designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/landscape-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="landscape-designer-vadodara" />;
}
