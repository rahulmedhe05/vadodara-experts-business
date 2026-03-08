import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Intermodal transport in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional intermodal transport services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/intermodal-transport-vadodara" },
  openGraph: {
    title: "Intermodal transport in Vadodara | VadodaraExperts",
    description: "Professional intermodal transport services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/intermodal-transport-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="intermodal-transport-vadodara" />;
}
