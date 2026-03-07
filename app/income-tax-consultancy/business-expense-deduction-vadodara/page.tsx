import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Business expense deduction in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional business expense deduction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/business-expense-deduction-vadodara" },
  openGraph: {
    title: "Business expense deduction in Vadodara | VadodaraExperts",
    description: "Professional business expense deduction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/business-expense-deduction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="business-expense-deduction-vadodara" />;
}
