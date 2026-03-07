import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "PAN correction in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional pan correction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/pan-correction-vadodara" },
  openGraph: {
    title: "PAN correction in Vadodara | VadodaraExperts",
    description: "Professional pan correction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/pan-correction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pan-correction-vadodara" />;
}
