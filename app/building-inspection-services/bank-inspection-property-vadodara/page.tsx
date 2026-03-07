import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-inspection-services")!;

export const metadata: Metadata = {
  title: "bank inspection property in Vadodara | Building Inspection Services | VadodaraExperts",
  description: "Professional bank inspection property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-inspection-services/bank-inspection-property-vadodara" },
  openGraph: {
    title: "bank inspection property in Vadodara | VadodaraExperts",
    description: "Professional bank inspection property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-inspection-services/bank-inspection-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bank-inspection-property-vadodara" />;
}
