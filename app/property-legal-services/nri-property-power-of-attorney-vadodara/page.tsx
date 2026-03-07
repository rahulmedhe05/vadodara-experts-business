import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "NRI property power of attorney in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional nri property power of attorney services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/nri-property-power-of-attorney-vadodara" },
  openGraph: {
    title: "NRI property power of attorney in Vadodara | VadodaraExperts",
    description: "Professional nri property power of attorney services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/nri-property-power-of-attorney-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nri-property-power-of-attorney-vadodara" />;
}
