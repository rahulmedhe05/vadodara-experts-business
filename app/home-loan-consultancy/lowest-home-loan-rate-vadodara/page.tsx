import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Lowest home loan rate in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional lowest home loan rate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/lowest-home-loan-rate-vadodara" },
  openGraph: {
    title: "Lowest home loan rate in Vadodara | VadodaraExperts",
    description: "Professional lowest home loan rate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/lowest-home-loan-rate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lowest-home-loan-rate-vadodara" />;
}
