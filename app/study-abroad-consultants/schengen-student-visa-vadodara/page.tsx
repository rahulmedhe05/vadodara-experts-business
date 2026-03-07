import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "Schengen student visa in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional schengen student visa services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/schengen-student-visa-vadodara" },
  openGraph: {
    title: "Schengen student visa in Vadodara | VadodaraExperts",
    description: "Professional schengen student visa services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/schengen-student-visa-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="schengen-student-visa-vadodara" />;
}
