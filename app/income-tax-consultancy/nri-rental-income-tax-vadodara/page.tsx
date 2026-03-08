import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "NRI rental income tax in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional nri rental income tax services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/nri-rental-income-tax-vadodara" },
  openGraph: {
    title: "NRI rental income tax in Vadodara | VadodaraExperts",
    description: "Professional nri rental income tax services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/nri-rental-income-tax-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-rental-income-tax-vadodara" />;
}
