import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "RERA compliance management in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional rera compliance management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/rera-compliance-management-vadodara" },
  openGraph: {
    title: "RERA compliance management in Vadodara | VadodaraExperts",
    description: "Professional rera compliance management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/rera-compliance-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rera-compliance-management-vadodara" />;
}
