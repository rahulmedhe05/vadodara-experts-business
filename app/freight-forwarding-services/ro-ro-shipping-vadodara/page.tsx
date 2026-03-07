import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Ro-Ro shipping in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional ro-ro shipping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/ro-ro-shipping-vadodara" },
  openGraph: {
    title: "Ro-Ro shipping in Vadodara | VadodaraExperts",
    description: "Professional ro-ro shipping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/ro-ro-shipping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ro-ro-shipping-vadodara" />;
}
