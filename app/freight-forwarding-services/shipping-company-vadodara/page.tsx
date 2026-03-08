import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Shipping company in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional shipping company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/shipping-company-vadodara" },
  openGraph: {
    title: "Shipping company in Vadodara | VadodaraExperts",
    description: "Professional shipping company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/shipping-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shipping-company-vadodara" />;
}
