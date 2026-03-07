import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "abroad education loan assistance in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional abroad education loan assistance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/abroad-education-loan-assistance-vadodara" },
  openGraph: {
    title: "abroad education loan assistance in Vadodara | VadodaraExperts",
    description: "Professional abroad education loan assistance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/abroad-education-loan-assistance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="abroad-education-loan-assistance-vadodara" />;
}
