import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "ITR 5 filing in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional itr 5 filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/itr-5-filing-vadodara" },
  openGraph: {
    title: "ITR 5 filing in Vadodara | VadodaraExperts",
    description: "Professional itr 5 filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/itr-5-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="itr-5-filing-vadodara" />;
}
