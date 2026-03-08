import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Possession dispute in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional possession dispute services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/possession-dispute-vadodara" },
  openGraph: {
    title: "Possession dispute in Vadodara | VadodaraExperts",
    description: "Professional possession dispute services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/possession-dispute-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="possession-dispute-vadodara" />;
}
