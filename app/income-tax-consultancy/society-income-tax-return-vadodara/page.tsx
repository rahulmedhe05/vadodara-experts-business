import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Society income tax return in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional society income tax return services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/society-income-tax-return-vadodara" },
  openGraph: {
    title: "Society income tax return in Vadodara | VadodaraExperts",
    description: "Professional society income tax return services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/society-income-tax-return-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="society-income-tax-return-vadodara" />;
}
