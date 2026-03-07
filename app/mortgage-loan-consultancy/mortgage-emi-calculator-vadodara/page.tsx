import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage EMI calculator in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage emi calculator services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-emi-calculator-vadodara" },
  openGraph: {
    title: "Mortgage EMI calculator in Vadodara | VadodaraExperts",
    description: "Professional mortgage emi calculator services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-emi-calculator-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-emi-calculator-vadodara" />;
}
