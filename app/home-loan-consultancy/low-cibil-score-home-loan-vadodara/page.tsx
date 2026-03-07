import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Low CIBIL score home loan in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional low cibil score home loan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/low-cibil-score-home-loan-vadodara" },
  openGraph: {
    title: "Low CIBIL score home loan in Vadodara | VadodaraExperts",
    description: "Professional low cibil score home loan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/low-cibil-score-home-loan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="low-cibil-score-home-loan-vadodara" />;
}
