import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Stamp duty valuation in Vadodara | Property Valuation Services | VadodaraExperts",
  description: "Professional stamp duty valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services/stamp-duty-valuation-vadodara" },
  openGraph: {
    title: "Stamp duty valuation in Vadodara | VadodaraExperts",
    description: "Professional stamp duty valuation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-valuation-services/stamp-duty-valuation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stamp-duty-valuation-vadodara" />;
}
