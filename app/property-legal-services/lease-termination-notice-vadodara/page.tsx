import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Lease termination notice in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional lease termination notice services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/lease-termination-notice-vadodara" },
  openGraph: {
    title: "Lease termination notice in Vadodara | VadodaraExperts",
    description: "Professional lease termination notice services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/lease-termination-notice-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lease-termination-notice-vadodara" />;
}
