import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Building permission verification in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional building permission verification services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/building-permission-verification-vadodara" },
  openGraph: {
    title: "Building permission verification in Vadodara | VadodaraExperts",
    description: "Professional building permission verification services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/building-permission-verification-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-permission-verification-vadodara" />;
}
