import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "LIC approved valuer in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional lic approved valuer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/lic-approved-valuer-vadodara" },
  openGraph: {
    title: "LIC approved valuer in Vadodara | VadodaraExperts",
    description: "Professional lic approved valuer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/lic-approved-valuer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lic-approved-valuer-vadodara" />;
}
