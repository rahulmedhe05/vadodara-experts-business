import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Income capitalization method in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional income capitalization method services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/income-capitalization-method-vadodara" },
  openGraph: {
    title: "Income capitalization method in Vadodara | VadodaraExperts",
    description: "Professional income capitalization method services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/income-capitalization-method-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="income-capitalization-method-vadodara" />;
}
