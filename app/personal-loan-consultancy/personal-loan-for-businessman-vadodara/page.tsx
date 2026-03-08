import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Personal loan for businessman in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional personal loan for businessman services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/personal-loan-for-businessman-vadodara" },
  openGraph: {
    title: "Personal loan for businessman in Vadodara | VadodaraExperts",
    description: "Professional personal loan for businessman services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/personal-loan-for-businessman-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="personal-loan-for-businessman-vadodara" />;
}
