import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "building code compliance in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional building code compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/building-code-compliance-vadodara" },
  openGraph: {
    title: "building code compliance in Vadodara | VadodaraExperts",
    description: "Professional building code compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/building-code-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-code-compliance-vadodara" />;
}
