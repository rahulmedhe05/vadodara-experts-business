import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "progress report construction in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional progress report construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/progress-report-construction-vadodara" },
  openGraph: {
    title: "progress report construction in Vadodara | VadodaraExperts",
    description: "Professional progress report construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/progress-report-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="progress-report-construction-vadodara" />;
}
