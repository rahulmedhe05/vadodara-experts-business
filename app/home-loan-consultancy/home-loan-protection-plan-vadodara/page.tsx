import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Home loan protection plan in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional home loan protection plan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-protection-plan-vadodara" },
  openGraph: {
    title: "Home loan protection plan in Vadodara | VadodaraExperts",
    description: "Professional home loan protection plan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-protection-plan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-loan-protection-plan-vadodara" />;
}
