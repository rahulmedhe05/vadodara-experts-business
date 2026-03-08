import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mortgage-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Mortgage for machinery purchase in Vadodara | Mortgage Loan Consultancy | VadodaraExperts",
  description: "Professional mortgage for machinery purchase services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-for-machinery-purchase-vadodara" },
  openGraph: {
    title: "Mortgage for machinery purchase in Vadodara | VadodaraExperts",
    description: "Professional mortgage for machinery purchase services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mortgage-loan-consultancy/mortgage-for-machinery-purchase-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mortgage-for-machinery-purchase-vadodara" />;
}
