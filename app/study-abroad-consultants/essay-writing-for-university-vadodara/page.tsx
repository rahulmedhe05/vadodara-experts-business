import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "essay writing for university in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional essay writing for university services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/essay-writing-for-university-vadodara" },
  openGraph: {
    title: "essay writing for university in Vadodara | VadodaraExperts",
    description: "Professional essay writing for university services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/essay-writing-for-university-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="essay-writing-for-university-vadodara" />;
}
