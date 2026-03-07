import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "Duolingo English test in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional duolingo english test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/duolingo-english-test-vadodara" },
  openGraph: {
    title: "Duolingo English test in Vadodara | VadodaraExperts",
    description: "Professional duolingo english test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/duolingo-english-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="duolingo-english-test-vadodara" />;
}
