import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Senior citizen tax filing in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional senior citizen tax filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/senior-citizen-tax-filing-vadodara" },
  openGraph: {
    title: "Senior citizen tax filing in Vadodara | VadodaraExperts",
    description: "Professional senior citizen tax filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/senior-citizen-tax-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="senior-citizen-tax-filing-vadodara" />;
}
