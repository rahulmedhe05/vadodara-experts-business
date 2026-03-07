import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Court approved valuer in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional court approved valuer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/court-approved-valuer-vadodara" },
  openGraph: {
    title: "Court approved valuer in Vadodara | VadodaraExperts",
    description: "Professional court approved valuer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/court-approved-valuer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="court-approved-valuer-vadodara" />;
}
