import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "IELTS preparation in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional ielts preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/ielts-preparation-vadodara" },
  openGraph: {
    title: "IELTS preparation in Vadodara | VadodaraExperts",
    description: "Professional ielts preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/ielts-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ielts-preparation-vadodara" />;
}
