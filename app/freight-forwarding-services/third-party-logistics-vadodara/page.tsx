import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Third party logistics in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional third party logistics services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/third-party-logistics-vadodara" },
  openGraph: {
    title: "Third party logistics in Vadodara | VadodaraExperts",
    description: "Professional third party logistics services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/third-party-logistics-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="third-party-logistics-vadodara" />;
}
