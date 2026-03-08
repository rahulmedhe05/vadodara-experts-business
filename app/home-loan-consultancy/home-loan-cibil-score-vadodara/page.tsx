import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Home loan CIBIL score in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional home loan cibil score services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-cibil-score-vadodara" },
  openGraph: {
    title: "Home loan CIBIL score in Vadodara | VadodaraExperts",
    description: "Professional home loan cibil score services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-cibil-score-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-loan-cibil-score-vadodara" />;
}
