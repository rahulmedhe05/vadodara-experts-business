import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "foreign education consultants in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional foreign education consultants services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/foreign-education-consultants-vadodara" },
  openGraph: {
    title: "foreign education consultants in Vadodara | VadodaraExperts",
    description: "Professional foreign education consultants services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/foreign-education-consultants-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="foreign-education-consultants-vadodara" />;
}
