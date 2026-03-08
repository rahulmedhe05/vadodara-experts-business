import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("office-interior-design")!;

export const metadata: Metadata = {
  title: "office interior designer in Vadodara | Office Interior Design | VadodaraExperts",
  description: "Professional office interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/office-interior-design/office-interior-designer-vadodara" },
  openGraph: {
    title: "office interior designer in Vadodara | VadodaraExperts",
    description: "Professional office interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/office-interior-design/office-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-interior-designer-vadodara" />;
}
