import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Next day delivery in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional next day delivery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/next-day-delivery-vadodara" },
  openGraph: {
    title: "Next day delivery in Vadodara | VadodaraExperts",
    description: "Professional next day delivery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/next-day-delivery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="next-day-delivery-vadodara" />;
}
