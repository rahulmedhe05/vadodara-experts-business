import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "study abroad with scholarship in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional study abroad with scholarship services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/study-abroad-with-scholarship-vadodara" },
  openGraph: {
    title: "study abroad with scholarship in Vadodara | VadodaraExperts",
    description: "Professional study abroad with scholarship services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/study-abroad-with-scholarship-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="study-abroad-with-scholarship-vadodara" />;
}
