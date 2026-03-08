import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Lease modification deed in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional lease modification deed services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/lease-modification-deed-vadodara" },
  openGraph: {
    title: "Lease modification deed in Vadodara | VadodaraExperts",
    description: "Professional lease modification deed services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/lease-modification-deed-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lease-modification-deed-vadodara" />;
}
