import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Crating in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional crating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/crating-vadodara" },
  openGraph: {
    title: "Crating in Vadodara | VadodaraExperts",
    description: "Professional crating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/crating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="crating-vadodara" />;
}
