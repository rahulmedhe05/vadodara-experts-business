import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "CLSS subsidy in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional clss subsidy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/clss-subsidy-vadodara" },
  openGraph: {
    title: "CLSS subsidy in Vadodara | VadodaraExperts",
    description: "Professional clss subsidy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/clss-subsidy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clss-subsidy-vadodara" />;
}
