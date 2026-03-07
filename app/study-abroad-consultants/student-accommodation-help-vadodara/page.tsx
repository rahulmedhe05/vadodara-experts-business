import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "student accommodation help in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional student accommodation help services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/student-accommodation-help-vadodara" },
  openGraph: {
    title: "student accommodation help in Vadodara | VadodaraExperts",
    description: "Professional student accommodation help services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/student-accommodation-help-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="student-accommodation-help-vadodara" />;
}
