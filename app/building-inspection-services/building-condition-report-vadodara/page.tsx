import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "building condition report in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional building condition report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/building-condition-report-vadodara" },
  openGraph: {
    title: "building condition report in Vadodara | VadodaraExperts",
    description: "Professional building condition report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/building-condition-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-condition-report-vadodara" />;
}
