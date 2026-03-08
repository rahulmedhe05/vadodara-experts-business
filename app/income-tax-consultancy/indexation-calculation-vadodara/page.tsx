import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Indexation calculation in Vadodara | Income Tax Consultancy | VadodaraExperts",
  description: "Professional indexation calculation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy/indexation-calculation-vadodara" },
  openGraph: {
    title: "Indexation calculation in Vadodara | VadodaraExperts",
    description: "Professional indexation calculation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/income-tax-consultancy/indexation-calculation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="indexation-calculation-vadodara" />;
}
