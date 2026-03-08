import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "student visa consultants in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional student visa consultants services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/student-visa-consultants-vadodara" },
  openGraph: {
    title: "student visa consultants in Vadodara | VadodaraExperts",
    description: "Professional student visa consultants services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/student-visa-consultants-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="student-visa-consultants-vadodara" />;
}
