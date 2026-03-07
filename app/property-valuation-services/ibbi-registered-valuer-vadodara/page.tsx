import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "IBBI registered valuer in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional ibbi registered valuer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/ibbi-registered-valuer-vadodara" },
  openGraph: {
    title: "IBBI registered valuer in Vadodara | VadodaraExperts",
    description: "Professional ibbi registered valuer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/ibbi-registered-valuer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ibbi-registered-valuer-vadodara" />;
}
