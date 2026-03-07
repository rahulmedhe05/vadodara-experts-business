import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Amazon FBA in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional amazon fba services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/amazon-fba-vadodara" },
  openGraph: {
    title: "Amazon FBA in Vadodara | VadodaraExperts",
    description: "Professional amazon fba services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/amazon-fba-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="amazon-fba-vadodara" />;
}
