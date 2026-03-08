import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "part time job abroad guidance in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional part time job abroad guidance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/part-time-job-abroad-guidance-vadodara" },
  openGraph: {
    title: "part time job abroad guidance in Vadodara | VadodaraExperts",
    description: "Professional part time job abroad guidance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/part-time-job-abroad-guidance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="part-time-job-abroad-guidance-vadodara" />;
}
