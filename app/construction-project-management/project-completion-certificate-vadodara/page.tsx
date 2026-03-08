import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "project completion certificate in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional project completion certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/project-completion-certificate-vadodara" },
  openGraph: {
    title: "project completion certificate in Vadodara | VadodaraExperts",
    description: "Professional project completion certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/project-completion-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-completion-certificate-vadodara" />;
}
