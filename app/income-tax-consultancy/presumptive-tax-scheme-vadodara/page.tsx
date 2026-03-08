import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Presumptive tax scheme in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional presumptive tax scheme services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/presumptive-tax-scheme-vadodara" },
  openGraph: {
    title: "Presumptive tax scheme in Vadodara | VadodaraExperts",
    description: "Professional presumptive tax scheme services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/presumptive-tax-scheme-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="presumptive-tax-scheme-vadodara" />;
}
