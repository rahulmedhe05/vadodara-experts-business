import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "First mile delivery in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional first mile delivery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/first-mile-delivery-vadodara" },
  openGraph: {
    title: "First mile delivery in Vadodara | VadodaraExperts",
    description: "Professional first mile delivery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/first-mile-delivery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="first-mile-delivery-vadodara" />;
}
