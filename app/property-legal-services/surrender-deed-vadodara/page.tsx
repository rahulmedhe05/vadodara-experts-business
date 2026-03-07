import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Surrender deed in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional surrender deed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/surrender-deed-vadodara" },
  openGraph: {
    title: "Surrender deed in Vadodara | VadodaraExperts",
    description: "Professional surrender deed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/surrender-deed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="surrender-deed-vadodara" />;
}
