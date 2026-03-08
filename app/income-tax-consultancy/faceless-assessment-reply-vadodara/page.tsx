import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Faceless assessment reply in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional faceless assessment reply services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/faceless-assessment-reply-vadodara" },
  openGraph: {
    title: "Faceless assessment reply in Vadodara | VadodaraExperts",
    description: "Professional faceless assessment reply services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/faceless-assessment-reply-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="faceless-assessment-reply-vadodara" />;
}
