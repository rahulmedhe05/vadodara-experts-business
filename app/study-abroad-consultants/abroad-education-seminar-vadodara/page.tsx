import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "abroad education seminar in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional abroad education seminar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/abroad-education-seminar-vadodara" },
  openGraph: {
    title: "abroad education seminar in Vadodara | VadodaraExperts",
    description: "Professional abroad education seminar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/abroad-education-seminar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="abroad-education-seminar-vadodara" />;
}
