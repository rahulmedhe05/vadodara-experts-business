import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "statement of purpose writing in Vadodara | Study Abroad Consultants | VadodaraExperts",
  description: "Professional statement of purpose writing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants/statement-of-purpose-writing-vadodara" },
  openGraph: {
    title: "statement of purpose writing in Vadodara | VadodaraExperts",
    description: "Professional statement of purpose writing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/study-abroad-consultants/statement-of-purpose-writing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="statement-of-purpose-writing-vadodara" />;
}
