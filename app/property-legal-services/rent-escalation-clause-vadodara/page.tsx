import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Rent escalation clause in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional rent escalation clause services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/rent-escalation-clause-vadodara" },
  openGraph: {
    title: "Rent escalation clause in Vadodara | VadodaraExperts",
    description: "Professional rent escalation clause services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/rent-escalation-clause-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rent-escalation-clause-vadodara" />;
}
