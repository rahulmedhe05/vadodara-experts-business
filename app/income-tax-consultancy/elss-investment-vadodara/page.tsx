import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "ELSS investment in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional elss investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/elss-investment-vadodara" },
  openGraph: {
    title: "ELSS investment in Vadodara | VadodaraExperts",
    description: "Professional elss investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/elss-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="elss-investment-vadodara" />;
}
