import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Housing loan consultant in Vadodara | Home Loan Consultancy | VadodaraExperts",
  description: "Professional housing loan consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy/housing-loan-consultant-vadodara" },
  openGraph: {
    title: "Housing loan consultant in Vadodara | VadodaraExperts",
    description: "Professional housing loan consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-loan-consultancy/housing-loan-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="housing-loan-consultant-vadodara" />;
}
