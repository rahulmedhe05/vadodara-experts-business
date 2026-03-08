import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "resume for abroad applications in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional resume for abroad applications services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/resume-for-abroad-applications-vadodara" },
  openGraph: {
    title: "resume for abroad applications in Vadodara | VadodaraExperts",
    description: "Professional resume for abroad applications services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/resume-for-abroad-applications-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="resume-for-abroad-applications-vadodara" />;
}
