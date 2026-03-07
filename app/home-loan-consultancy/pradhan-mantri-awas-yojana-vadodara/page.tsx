import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Pradhan Mantri Awas Yojana in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional pradhan mantri awas yojana services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/pradhan-mantri-awas-yojana-vadodara" },
  openGraph: {
    title: "Pradhan Mantri Awas Yojana in Vadodara | VadodaraExperts",
    description: "Professional pradhan mantri awas yojana services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/pradhan-mantri-awas-yojana-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pradhan-mantri-awas-yojana-vadodara" />;
}
