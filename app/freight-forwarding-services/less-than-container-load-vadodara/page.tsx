import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Less than container load in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional less than container load services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/less-than-container-load-vadodara" },
  openGraph: {
    title: "Less than container load in Vadodara | VadodaraExperts",
    description: "Professional less than container load services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/less-than-container-load-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="less-than-container-load-vadodara" />;
}
