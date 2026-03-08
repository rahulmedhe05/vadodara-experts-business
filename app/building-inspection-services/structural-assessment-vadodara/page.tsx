import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "structural assessment in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional structural assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/structural-assessment-vadodara" },
  openGraph: {
    title: "structural assessment in Vadodara | VadodaraExperts",
    description: "Professional structural assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/structural-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structural-assessment-vadodara" />;
}
