import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "CIBIL report check in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional cibil report check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/cibil-report-check-vadodara" },
  openGraph: {
    title: "CIBIL report check in Vadodara | VadodaraExperts",
    description: "Professional cibil report check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/cibil-report-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cibil-report-check-vadodara" />;
}
