import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "PTE preparation in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional pte preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/pte-preparation-vadodara" },
  openGraph: {
    title: "PTE preparation in Vadodara | VadodaraExperts",
    description: "Professional pte preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/pte-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pte-preparation-vadodara" />;
}
