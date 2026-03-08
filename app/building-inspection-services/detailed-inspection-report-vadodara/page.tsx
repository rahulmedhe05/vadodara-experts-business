import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "detailed inspection report in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional detailed inspection report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/detailed-inspection-report-vadodara" },
  openGraph: {
    title: "detailed inspection report in Vadodara | VadodaraExperts",
    description: "Professional detailed inspection report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/detailed-inspection-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="detailed-inspection-report-vadodara" />;
}
