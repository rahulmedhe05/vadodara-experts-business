import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Education loan tax benefit in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional education loan tax benefit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/education-loan-tax-benefit-vadodara" },
  openGraph: {
    title: "Education loan tax benefit in Vadodara | VadodaraExperts",
    description: "Professional education loan tax benefit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/education-loan-tax-benefit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="education-loan-tax-benefit-vadodara" />;
}
