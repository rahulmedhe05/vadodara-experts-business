import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Same day delivery in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional same day delivery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/same-day-delivery-vadodara" },
  openGraph: {
    title: "Same day delivery in Vadodara | VadodaraExperts",
    description: "Professional same day delivery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/same-day-delivery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="same-day-delivery-vadodara" />;
}
