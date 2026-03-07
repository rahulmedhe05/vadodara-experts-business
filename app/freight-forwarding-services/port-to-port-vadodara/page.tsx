import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Port to port in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional port to port services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/port-to-port-vadodara" },
  openGraph: {
    title: "Port to port in Vadodara | VadodaraExperts",
    description: "Professional port to port services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/port-to-port-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="port-to-port-vadodara" />;
}
