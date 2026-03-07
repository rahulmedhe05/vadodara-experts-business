import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("waterproofing-services")!;

export const metadata: Metadata = {
  title: "Terrace heat insulation in Vadodara | Waterproofing Services | VadodaraExperts",
  description: "Professional terrace heat insulation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/waterproofing-services/terrace-heat-insulation-vadodara" },
  openGraph: {
    title: "Terrace heat insulation in Vadodara | VadodaraExperts",
    description: "Professional terrace heat insulation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/waterproofing-services/terrace-heat-insulation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-heat-insulation-vadodara" />;
}
