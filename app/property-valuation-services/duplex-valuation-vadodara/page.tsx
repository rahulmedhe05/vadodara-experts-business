import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Duplex valuation in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional duplex valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/duplex-valuation-vadodara" },
  openGraph: {
    title: "Duplex valuation in Vadodara | VadodaraExperts",
    description: "Professional duplex valuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/duplex-valuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="duplex-valuation-vadodara" />;
}
