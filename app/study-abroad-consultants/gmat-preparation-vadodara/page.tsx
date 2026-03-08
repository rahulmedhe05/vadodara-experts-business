import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "GMAT preparation in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional gmat preparation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/gmat-preparation-vadodara" },
  openGraph: {
    title: "GMAT preparation in Vadodara | VadodaraExperts",
    description: "Professional gmat preparation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/gmat-preparation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gmat-preparation-vadodara" />;
}
