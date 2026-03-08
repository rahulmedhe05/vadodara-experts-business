import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Power of attorney property in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional power of attorney property services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/power-of-attorney-property-vadodara" },
  openGraph: {
    title: "Power of attorney property in Vadodara | VadodaraExperts",
    description: "Professional power of attorney property services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/power-of-attorney-property-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="power-of-attorney-property-vadodara" />;
}
