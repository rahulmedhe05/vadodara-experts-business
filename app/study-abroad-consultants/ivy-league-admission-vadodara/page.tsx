import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "Ivy League admission in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional ivy league admission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/ivy-league-admission-vadodara" },
  openGraph: {
    title: "Ivy League admission in Vadodara | VadodaraExperts",
    description: "Professional ivy league admission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/ivy-league-admission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ivy-league-admission-vadodara" />;
}
