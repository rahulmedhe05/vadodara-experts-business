import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Home loan co applicant in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional home loan co applicant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-co-applicant-vadodara" },
  openGraph: {
    title: "Home loan co applicant in Vadodara | VadodaraExperts",
    description: "Professional home loan co applicant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-co-applicant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-loan-co-applicant-vadodara" />;
}
