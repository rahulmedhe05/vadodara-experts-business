import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Short term capital gains tax in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional short term capital gains tax services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/short-term-capital-gains-tax-vadodara" },
  openGraph: {
    title: "Short term capital gains tax in Vadodara | VadodaraExperts",
    description: "Professional short term capital gains tax services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/short-term-capital-gains-tax-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="short-term-capital-gains-tax-vadodara" />;
}
