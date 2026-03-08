import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "carbonation test building in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional carbonation test building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/carbonation-test-building-vadodara" },
  openGraph: {
    title: "carbonation test building in Vadodara | VadodaraExperts",
    description: "Professional carbonation test building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/carbonation-test-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carbonation-test-building-vadodara" />;
}
