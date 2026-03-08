import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "law abroad consultants in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional law abroad consultants services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/law-abroad-consultants-vadodara" },
  openGraph: {
    title: "law abroad consultants in Vadodara | VadodaraExperts",
    description: "Professional law abroad consultants services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/law-abroad-consultants-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="law-abroad-consultants-vadodara" />;
}
