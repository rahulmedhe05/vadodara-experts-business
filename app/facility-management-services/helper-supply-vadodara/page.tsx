import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Helper supply in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional helper supply services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/helper-supply-vadodara" },
  openGraph: {
    title: "Helper supply in Vadodara | VadodaraExperts",
    description: "Professional helper supply services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/helper-supply-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="helper-supply-vadodara" />;
}
