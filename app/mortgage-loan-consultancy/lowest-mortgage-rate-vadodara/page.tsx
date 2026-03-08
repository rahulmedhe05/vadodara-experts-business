import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Lowest mortgage rate in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional lowest mortgage rate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/lowest-mortgage-rate-vadodara" },
  openGraph: {
    title: "Lowest mortgage rate in Vadodara | VadodaraExperts",
    description: "Professional lowest mortgage rate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/lowest-mortgage-rate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lowest-mortgage-rate-vadodara" />;
}
