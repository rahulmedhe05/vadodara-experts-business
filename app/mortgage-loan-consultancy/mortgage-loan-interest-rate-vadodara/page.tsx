import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage loan interest rate in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage loan interest rate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-loan-interest-rate-vadodara" },
  openGraph: {
    title: "Mortgage loan interest rate in Vadodara | VadodaraExperts",
    description: "Professional mortgage loan interest rate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-loan-interest-rate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-loan-interest-rate-vadodara" />;
}
