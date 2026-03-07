import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-fabrication-services")!;

export const metadata: Metadata = {
  title: "drilling work in Vadodara | Steel Fabrication Services | VadodaraExperts",
  description: "Professional drilling work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-fabrication-services/drilling-work-vadodara" },
  openGraph: {
    title: "drilling work in Vadodara | VadodaraExperts",
    description: "Professional drilling work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-fabrication-services/drilling-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drilling-work-vadodara" />;
}
