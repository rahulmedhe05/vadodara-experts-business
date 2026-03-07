import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Door to door delivery in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional door to door delivery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/door-to-door-delivery-vadodara" },
  openGraph: {
    title: "Door to door delivery in Vadodara | VadodaraExperts",
    description: "Professional door to door delivery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/door-to-door-delivery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="door-to-door-delivery-vadodara" />;
}
