import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Legal due diligence report in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional legal due diligence report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/legal-due-diligence-report-vadodara" },
  openGraph: {
    title: "Legal due diligence report in Vadodara | VadodaraExperts",
    description: "Professional legal due diligence report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/legal-due-diligence-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-due-diligence-report-vadodara" />;
}
