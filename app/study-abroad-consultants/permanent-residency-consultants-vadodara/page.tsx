import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "permanent residency consultants in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional permanent residency consultants services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/permanent-residency-consultants-vadodara" },
  openGraph: {
    title: "permanent residency consultants in Vadodara | VadodaraExperts",
    description: "Professional permanent residency consultants services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/permanent-residency-consultants-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="permanent-residency-consultants-vadodara" />;
}
