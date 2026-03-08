import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Break bulk shipping in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional break bulk shipping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/break-bulk-shipping-vadodara" },
  openGraph: {
    title: "Break bulk shipping in Vadodara | VadodaraExperts",
    description: "Professional break bulk shipping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/break-bulk-shipping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="break-bulk-shipping-vadodara" />;
}
