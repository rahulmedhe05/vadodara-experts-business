import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "SOP writing services in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional sop writing services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/sop-writing-services-vadodara" },
  openGraph: {
    title: "SOP writing services in Vadodara | VadodaraExperts",
    description: "Professional sop writing services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/sop-writing-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sop-writing-services-vadodara" />;
}
