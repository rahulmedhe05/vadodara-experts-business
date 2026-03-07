import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Credit score improvement in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional credit score improvement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/credit-score-improvement-vadodara" },
  openGraph: {
    title: "Credit score improvement in Vadodara | VadodaraExperts",
    description: "Professional credit score improvement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/credit-score-improvement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="credit-score-improvement-vadodara" />;
}
