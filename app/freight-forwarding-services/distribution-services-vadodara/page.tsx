import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Distribution services in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional distribution services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/distribution-services-vadodara" },
  openGraph: {
    title: "Distribution services in Vadodara | VadodaraExperts",
    description: "Professional distribution services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/distribution-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="distribution-services-vadodara" />;
}
