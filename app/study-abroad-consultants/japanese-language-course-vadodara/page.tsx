import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "Japanese language course in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional japanese language course services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/japanese-language-course-vadodara" },
  openGraph: {
    title: "Japanese language course in Vadodara | VadodaraExperts",
    description: "Professional japanese language course services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/japanese-language-course-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="japanese-language-course-vadodara" />;
}
