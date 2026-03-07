import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Project report preparation in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional project report preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/project-report-preparation-vadodara" },
  openGraph: {
    title: "Project report preparation in Vadodara | VadodaraExperts",
    description: "Professional project report preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/project-report-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-report-preparation-vadodara" />;
}
