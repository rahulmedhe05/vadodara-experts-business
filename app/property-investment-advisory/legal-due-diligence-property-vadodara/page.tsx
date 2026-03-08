import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-investment-advisory")!;

export const metadata: Metadata = {
  title: "legal due diligence property in Vadodara | Property Investment Advisory | VadodaraExperts",
  description: "Professional legal due diligence property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-investment-advisory/legal-due-diligence-property-vadodara" },
  openGraph: {
    title: "legal due diligence property in Vadodara | VadodaraExperts",
    description: "Professional legal due diligence property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-investment-advisory/legal-due-diligence-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="legal-due-diligence-property-vadodara" />;
}
