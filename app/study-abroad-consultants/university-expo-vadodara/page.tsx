import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "university expo in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional university expo services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/university-expo-vadodara" },
  openGraph: {
    title: "university expo in Vadodara | VadodaraExperts",
    description: "Professional university expo services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/university-expo-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="university-expo-vadodara" />;
}
