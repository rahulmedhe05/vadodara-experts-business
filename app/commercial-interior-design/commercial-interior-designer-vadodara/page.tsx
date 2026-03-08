import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "commercial interior designer in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional commercial interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/commercial-interior-designer-vadodara" },
  openGraph: {
    title: "commercial interior designer in Vadodara | VadodaraExperts",
    description: "Professional commercial interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/commercial-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="commercial-interior-designer-vadodara" />;
}
