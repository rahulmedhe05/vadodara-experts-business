import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Home loan tax benefit in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional home loan tax benefit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/home-loan-tax-benefit-vadodara" },
  openGraph: {
    title: "Home loan tax benefit in Vadodara | VadodaraExperts",
    description: "Professional home loan tax benefit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/home-loan-tax-benefit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="home-loan-tax-benefit-vadodara" />;
}
