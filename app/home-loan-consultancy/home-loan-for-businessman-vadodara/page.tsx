import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Home loan for businessman in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional home loan for businessman services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-for-businessman-vadodara" },
  openGraph: {
    title: "Home loan for businessman in Vadodara | VadodaraExperts",
    description: "Professional home loan for businessman services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-for-businessman-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-loan-for-businessman-vadodara" />;
}
