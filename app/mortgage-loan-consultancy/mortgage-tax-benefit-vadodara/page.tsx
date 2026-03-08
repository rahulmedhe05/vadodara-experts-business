import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage tax benefit in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage tax benefit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-tax-benefit-vadodara" },
  openGraph: {
    title: "Mortgage tax benefit in Vadodara | VadodaraExperts",
    description: "Professional mortgage tax benefit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-tax-benefit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-tax-benefit-vadodara" />;
}
