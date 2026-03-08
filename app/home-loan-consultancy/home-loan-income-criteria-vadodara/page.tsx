import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Home loan income criteria in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional home loan income criteria services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-income-criteria-vadodara" },
  openGraph: {
    title: "Home loan income criteria in Vadodara | VadodaraExperts",
    description: "Professional home loan income criteria services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/home-loan-income-criteria-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-loan-income-criteria-vadodara" />;
}
