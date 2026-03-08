import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Income tax consultant in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional income tax consultant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/income-tax-consultant-vadodara" },
  openGraph: {
    title: "Income tax consultant in Vadodara | VadodaraExperts",
    description: "Professional income tax consultant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/income-tax-consultant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="income-tax-consultant-vadodara" />;
}
