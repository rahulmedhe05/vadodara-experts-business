import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "project management consultant in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional project management consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/project-management-consultant-vadodara" },
  openGraph: {
    title: "project management consultant in Vadodara | VadodaraExperts",
    description: "Professional project management consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/project-management-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-management-consultant-vadodara" />;
}
