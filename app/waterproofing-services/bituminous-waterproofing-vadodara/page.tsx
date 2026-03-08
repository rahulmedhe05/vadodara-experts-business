import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Bituminous waterproofing in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional bituminous waterproofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/bituminous-waterproofing-vadodara" },
  openGraph: {
    title: "Bituminous waterproofing in Vadodara | VadodaraExperts",
    description: "Professional bituminous waterproofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/bituminous-waterproofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bituminous-waterproofing-vadodara" />;
}
