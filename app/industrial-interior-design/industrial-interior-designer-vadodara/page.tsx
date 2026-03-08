import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "industrial interior designer in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional industrial interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/industrial-interior-designer-vadodara" },
  openGraph: {
    title: "industrial interior designer in Vadodara | VadodaraExperts",
    description: "Professional industrial interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/industrial-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-interior-designer-vadodara" />;
}
