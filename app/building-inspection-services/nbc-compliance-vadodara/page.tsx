import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "NBC compliance in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional nbc compliance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/nbc-compliance-vadodara" },
  openGraph: {
    title: "NBC compliance in Vadodara | VadodaraExperts",
    description: "Professional nbc compliance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/nbc-compliance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nbc-compliance-vadodara" />;
}
