import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "project viability study in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional project viability study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/project-viability-study-vadodara" },
  openGraph: {
    title: "project viability study in Vadodara | VadodaraExperts",
    description: "Professional project viability study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/project-viability-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-viability-study-vadodara" />;
}
