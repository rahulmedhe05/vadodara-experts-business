import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Best freight forwarder in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional best freight forwarder services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/best-freight-forwarder-vadodara" },
  openGraph: {
    title: "Best freight forwarder in Vadodara | VadodaraExperts",
    description: "Professional best freight forwarder services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/best-freight-forwarder-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-freight-forwarder-vadodara" />;
}
