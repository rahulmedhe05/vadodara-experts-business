import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "NRI TDS refund in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional nri tds refund services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/nri-tds-refund-vadodara" },
  openGraph: {
    title: "NRI TDS refund in Vadodara | VadodaraExperts",
    description: "Professional nri tds refund services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/nri-tds-refund-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-tds-refund-vadodara" />;
}
