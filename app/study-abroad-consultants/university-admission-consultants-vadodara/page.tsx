import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "university admission consultants in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional university admission consultants services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/university-admission-consultants-vadodara" },
  openGraph: {
    title: "university admission consultants in Vadodara | VadodaraExperts",
    description: "Professional university admission consultants services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/university-admission-consultants-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="university-admission-consultants-vadodara" />;
}
