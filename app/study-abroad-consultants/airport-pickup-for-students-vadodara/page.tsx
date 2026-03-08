import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "airport pickup for students in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional airport pickup for students services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/airport-pickup-for-students-vadodara" },
  openGraph: {
    title: "airport pickup for students in Vadodara | VadodaraExperts",
    description: "Professional airport pickup for students services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/airport-pickup-for-students-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="airport-pickup-for-students-vadodara" />;
}
