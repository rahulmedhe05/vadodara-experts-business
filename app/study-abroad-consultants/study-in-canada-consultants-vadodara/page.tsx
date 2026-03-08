import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "study in Canada consultants in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional study in canada consultants services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/study-in-canada-consultants-vadodara" },
  openGraph: {
    title: "study in Canada consultants in Vadodara | VadodaraExperts",
    description: "Professional study in canada consultants services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/study-in-canada-consultants-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="study-in-canada-consultants-vadodara" />;
}
