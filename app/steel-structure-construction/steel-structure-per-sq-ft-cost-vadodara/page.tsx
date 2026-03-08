import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "steel structure per sq ft cost in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional steel structure per sq ft cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-per-sq-ft-cost-vadodara" },
  openGraph: {
    title: "steel structure per sq ft cost in Vadodara | VadodaraExperts",
    description: "Professional steel structure per sq ft cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/steel-structure-per-sq-ft-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-structure-per-sq-ft-cost-vadodara" />;
}
