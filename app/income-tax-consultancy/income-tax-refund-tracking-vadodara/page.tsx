import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Income tax refund tracking in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional income tax refund tracking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/income-tax-refund-tracking-vadodara" },
  openGraph: {
    title: "Income tax refund tracking in Vadodara | VadodaraExperts",
    description: "Professional income tax refund tracking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/income-tax-refund-tracking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="income-tax-refund-tracking-vadodara" />;
}
