import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "safety audit construction in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional safety audit construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/safety-audit-construction-vadodara" },
  openGraph: {
    title: "safety audit construction in Vadodara | VadodaraExperts",
    description: "Professional safety audit construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/safety-audit-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="safety-audit-construction-vadodara" />;
}
