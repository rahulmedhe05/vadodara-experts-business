import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "General power of attorney in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional general power of attorney services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/general-power-of-attorney-vadodara" },
  openGraph: {
    title: "General power of attorney in Vadodara | VadodaraExperts",
    description: "Professional general power of attorney services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/general-power-of-attorney-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="general-power-of-attorney-vadodara" />;
}
