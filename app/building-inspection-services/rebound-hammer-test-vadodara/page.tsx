import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "rebound hammer test in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional rebound hammer test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/rebound-hammer-test-vadodara" },
  openGraph: {
    title: "rebound hammer test in Vadodara | VadodaraExperts",
    description: "Professional rebound hammer test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/rebound-hammer-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rebound-hammer-test-vadodara" />;
}
