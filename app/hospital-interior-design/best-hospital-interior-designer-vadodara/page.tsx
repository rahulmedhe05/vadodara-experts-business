import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "best hospital interior designer in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional best hospital interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/best-hospital-interior-designer-vadodara" },
  openGraph: {
    title: "best hospital interior designer in Vadodara | VadodaraExperts",
    description: "Professional best hospital interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/best-hospital-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-hospital-interior-designer-vadodara" />;
}
