import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "PMAY subsidy in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional pmay subsidy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/pmay-subsidy-vadodara" },
  openGraph: {
    title: "PMAY subsidy in Vadodara | VadodaraExperts",
    description: "Professional pmay subsidy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/pmay-subsidy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pmay-subsidy-vadodara" />;
}
