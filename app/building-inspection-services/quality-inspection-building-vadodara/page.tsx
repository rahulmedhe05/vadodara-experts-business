import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "quality inspection building in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional quality inspection building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/quality-inspection-building-vadodara" },
  openGraph: {
    title: "quality inspection building in Vadodara | VadodaraExperts",
    description: "Professional quality inspection building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/quality-inspection-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="quality-inspection-building-vadodara" />;
}
