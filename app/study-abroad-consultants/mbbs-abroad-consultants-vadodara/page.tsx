import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "MBBS abroad consultants in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional mbbs abroad consultants services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/mbbs-abroad-consultants-vadodara" },
  openGraph: {
    title: "MBBS abroad consultants in Vadodara | VadodaraExperts",
    description: "Professional mbbs abroad consultants services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/mbbs-abroad-consultants-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mbbs-abroad-consultants-vadodara" />;
}
