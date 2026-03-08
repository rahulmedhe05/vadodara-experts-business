import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Lashing and choking in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional lashing and choking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/lashing-and-choking-vadodara" },
  openGraph: {
    title: "Lashing and choking in Vadodara | VadodaraExperts",
    description: "Professional lashing and choking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/lashing-and-choking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lashing-and-choking-vadodara" />;
}
