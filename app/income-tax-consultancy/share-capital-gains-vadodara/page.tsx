import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Share capital gains in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional share capital gains services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/share-capital-gains-vadodara" },
  openGraph: {
    title: "Share capital gains in Vadodara | VadodaraExperts",
    description: "Professional share capital gains services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/share-capital-gains-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="share-capital-gains-vadodara" />;
}
