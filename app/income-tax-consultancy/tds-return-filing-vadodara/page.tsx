import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "TDS return filing in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional tds return filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/tds-return-filing-vadodara" },
  openGraph: {
    title: "TDS return filing in Vadodara | VadodaraExperts",
    description: "Professional tds return filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/tds-return-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tds-return-filing-vadodara" />;
}
