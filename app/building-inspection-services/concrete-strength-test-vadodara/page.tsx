import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "concrete strength test in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional concrete strength test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/concrete-strength-test-vadodara" },
  openGraph: {
    title: "concrete strength test in Vadodara | VadodaraExperts",
    description: "Professional concrete strength test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/concrete-strength-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-strength-test-vadodara" />;
}
