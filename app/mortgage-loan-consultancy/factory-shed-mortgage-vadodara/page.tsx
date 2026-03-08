import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Factory shed mortgage in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional factory shed mortgage services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/factory-shed-mortgage-vadodara" },
  openGraph: {
    title: "Factory shed mortgage in Vadodara | VadodaraExperts",
    description: "Professional factory shed mortgage services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/factory-shed-mortgage-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-shed-mortgage-vadodara" />;
}
