import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "low cost study abroad in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional low cost study abroad services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/low-cost-study-abroad-vadodara" },
  openGraph: {
    title: "low cost study abroad in Vadodara | VadodaraExperts",
    description: "Professional low cost study abroad services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/low-cost-study-abroad-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="low-cost-study-abroad-vadodara" />;
}
