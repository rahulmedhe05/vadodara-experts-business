import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "non-destructive testing in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional non-destructive testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/non-destructive-testing-vadodara" },
  openGraph: {
    title: "non-destructive testing in Vadodara | VadodaraExperts",
    description: "Professional non-destructive testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/non-destructive-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="non-destructive-testing-vadodara" />;
}
