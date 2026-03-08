import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "DTAA benefit in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional dtaa benefit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/dtaa-benefit-vadodara" },
  openGraph: {
    title: "DTAA benefit in Vadodara | VadodaraExperts",
    description: "Professional dtaa benefit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/dtaa-benefit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dtaa-benefit-vadodara" />;
}
