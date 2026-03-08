import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "immigration after study in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional immigration after study services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/immigration-after-study-vadodara" },
  openGraph: {
    title: "immigration after study in Vadodara | VadodaraExperts",
    description: "Professional immigration after study services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/immigration-after-study-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="immigration-after-study-vadodara" />;
}
