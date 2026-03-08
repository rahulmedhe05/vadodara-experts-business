import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "monthly progress report in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional monthly progress report services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/monthly-progress-report-vadodara" },
  openGraph: {
    title: "monthly progress report in Vadodara | VadodaraExperts",
    description: "Professional monthly progress report services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/monthly-progress-report-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="monthly-progress-report-vadodara" />;
}
