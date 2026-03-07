import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Planter box waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional planter box waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/planter-box-waterproofing-vadodara" },
  openGraph: {
    title: "Planter box waterproofing in Vadodara | VadodaraExperts",
    description: "Professional planter box waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/planter-box-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="planter-box-waterproofing-vadodara" />;
}
