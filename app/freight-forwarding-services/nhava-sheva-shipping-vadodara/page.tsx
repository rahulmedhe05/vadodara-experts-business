import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Nhava Sheva shipping in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional nhava sheva shipping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/nhava-sheva-shipping-vadodara" },
  openGraph: {
    title: "Nhava Sheva shipping in Vadodara | VadodaraExperts",
    description: "Professional nhava sheva shipping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/nhava-sheva-shipping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nhava-sheva-shipping-vadodara" />;
}
