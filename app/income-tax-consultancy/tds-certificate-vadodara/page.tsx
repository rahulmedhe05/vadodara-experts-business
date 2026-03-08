import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "TDS certificate in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional tds certificate services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/tds-certificate-vadodara" },
  openGraph: {
    title: "TDS certificate in Vadodara | VadodaraExperts",
    description: "Professional tds certificate services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/tds-certificate-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tds-certificate-vadodara" />;
}
