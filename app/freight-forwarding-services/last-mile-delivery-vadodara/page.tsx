import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Last mile delivery in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional last mile delivery services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/last-mile-delivery-vadodara" },
  openGraph: {
    title: "Last mile delivery in Vadodara | VadodaraExperts",
    description: "Professional last mile delivery services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/last-mile-delivery-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="last-mile-delivery-vadodara" />;
}
