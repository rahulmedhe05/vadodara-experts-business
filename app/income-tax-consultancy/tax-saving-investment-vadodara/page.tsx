import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Tax saving investment in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional tax saving investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/tax-saving-investment-vadodara" },
  openGraph: {
    title: "Tax saving investment in Vadodara | VadodaraExperts",
    description: "Professional tax saving investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/tax-saving-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tax-saving-investment-vadodara" />;
}
