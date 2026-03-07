import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Self assessment tax in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional self assessment tax services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/self-assessment-tax-vadodara" },
  openGraph: {
    title: "Self assessment tax in Vadodara | VadodaraExperts",
    description: "Professional self assessment tax services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/self-assessment-tax-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="self-assessment-tax-vadodara" />;
}
