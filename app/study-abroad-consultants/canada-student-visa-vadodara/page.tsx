import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "Canada student visa in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional canada student visa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/canada-student-visa-vadodara" },
  openGraph: {
    title: "Canada student visa in Vadodara | VadodaraExperts",
    description: "Professional canada student visa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/canada-student-visa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="canada-student-visa-vadodara" />;
}
