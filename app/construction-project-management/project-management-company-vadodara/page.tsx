import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "project management company in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional project management company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/project-management-company-vadodara" },
  openGraph: {
    title: "project management company in Vadodara | VadodaraExperts",
    description: "Professional project management company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/project-management-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="project-management-company-vadodara" />;
}
