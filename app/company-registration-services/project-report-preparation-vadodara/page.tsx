import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("company-registration-services")!;

export const metadata: Metadata = {
  title: "Project report preparation in Vadodara | Company Registration Services | VadodaraExperts",
  description: "Professional project report preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/company-registration-services/project-report-preparation-vadodara" },
  openGraph: {
    title: "Project report preparation in Vadodara | VadodaraExperts",
    description: "Professional project report preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/company-registration-services/project-report-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-report-preparation-vadodara" />;
}
