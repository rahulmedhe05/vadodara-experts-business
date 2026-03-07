import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Reefer container in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional reefer container services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/reefer-container-vadodara" },
  openGraph: {
    title: "Reefer container in Vadodara | VadodaraExperts",
    description: "Professional reefer container services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/reefer-container-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reefer-container-vadodara" />;
}
