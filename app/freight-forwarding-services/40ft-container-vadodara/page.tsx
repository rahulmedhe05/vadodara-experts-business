import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "40ft container in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional 40ft container services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/40ft-container-vadodara" },
  openGraph: {
    title: "40ft container in Vadodara | VadodaraExperts",
    description: "Professional 40ft container services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/40ft-container-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="40ft-container-vadodara" />;
}
