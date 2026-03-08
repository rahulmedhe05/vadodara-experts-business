import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Professional interior designer in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional professional interior designer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/professional-interior-designer-vadodara" },
  openGraph: {
    title: "Professional interior designer in Vadodara | VadodaraExperts",
    description: "Professional professional interior designer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/professional-interior-designer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="professional-interior-designer-vadodara" />;
}
