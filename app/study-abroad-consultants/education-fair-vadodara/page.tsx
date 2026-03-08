import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "education fair in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional education fair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/education-fair-vadodara" },
  openGraph: {
    title: "education fair in Vadodara | VadodaraExperts",
    description: "Professional education fair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/education-fair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="education-fair-vadodara" />;
}
