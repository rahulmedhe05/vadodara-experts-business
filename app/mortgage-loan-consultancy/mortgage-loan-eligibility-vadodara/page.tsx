import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage loan eligibility in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage loan eligibility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-loan-eligibility-vadodara" },
  openGraph: {
    title: "Mortgage loan eligibility in Vadodara | VadodaraExperts",
    description: "Professional mortgage loan eligibility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-loan-eligibility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-loan-eligibility-vadodara" />;
}
