import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("personal-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Lowest personal loan rate in Vadodara | Personal Loan Consultancy | VadodaraExperts",
  description: "Professional lowest personal loan rate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/personal-loan-consultancy/lowest-personal-loan-rate-vadodara" },
  openGraph: {
    title: "Lowest personal loan rate in Vadodara | VadodaraExperts",
    description: "Professional lowest personal loan rate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/personal-loan-consultancy/lowest-personal-loan-rate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lowest-personal-loan-rate-vadodara" />;
}
