import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "French language course in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional french language course services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/french-language-course-vadodara" },
  openGraph: {
    title: "French language course in Vadodara | VadodaraExperts",
    description: "Professional french language course services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/french-language-course-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="french-language-course-vadodara" />;
}
