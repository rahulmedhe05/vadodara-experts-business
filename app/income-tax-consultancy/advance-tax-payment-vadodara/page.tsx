import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Advance tax payment in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional advance tax payment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/advance-tax-payment-vadodara" },
  openGraph: {
    title: "Advance tax payment in Vadodara | VadodaraExperts",
    description: "Professional advance tax payment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/advance-tax-payment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="advance-tax-payment-vadodara" />;
}
