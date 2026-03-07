import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "HUF income tax return in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional huf income tax return services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/huf-income-tax-return-vadodara" },
  openGraph: {
    title: "HUF income tax return in Vadodara | VadodaraExperts",
    description: "Professional huf income tax return services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/huf-income-tax-return-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="huf-income-tax-return-vadodara" />;
}
