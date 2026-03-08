import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Old vs new tax regime in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional old vs new tax regime services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/old-vs-new-tax-regime-vadodara" },
  openGraph: {
    title: "Old vs new tax regime in Vadodara | VadodaraExperts",
    description: "Professional old vs new tax regime services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/old-vs-new-tax-regime-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="old-vs-new-tax-regime-vadodara" />;
}
