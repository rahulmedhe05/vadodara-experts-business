import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Fixed rate mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional fixed rate mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/fixed-rate-mortgage-vadodara" },
  openGraph: {
    title: "Fixed rate mortgage in Vadodara | VadodaraExperts",
    description: "Professional fixed rate mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/fixed-rate-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fixed-rate-mortgage-vadodara" />;
}
