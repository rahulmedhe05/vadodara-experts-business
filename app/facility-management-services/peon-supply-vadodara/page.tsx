import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("facility-management-services")!;

export const metadata: Metadata = {
  title: "Peon supply in Vadodara | Facility Management Services | VadodaraExperts",
  description: "Professional peon supply services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/facility-management-services/peon-supply-vadodara" },
  openGraph: {
    title: "Peon supply in Vadodara | VadodaraExperts",
    description: "Professional peon supply services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/facility-management-services/peon-supply-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="peon-supply-vadodara" />;
}
