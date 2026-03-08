import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Income tax scrutiny in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional income tax scrutiny services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/income-tax-scrutiny-vadodara" },
  openGraph: {
    title: "Income tax scrutiny in Vadodara | VadodaraExperts",
    description: "Professional income tax scrutiny services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/income-tax-scrutiny-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="income-tax-scrutiny-vadodara" />;
}
