import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Free trade warehouse in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional free trade warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/free-trade-warehouse-vadodara" },
  openGraph: {
    title: "Free trade warehouse in Vadodara | VadodaraExperts",
    description: "Professional free trade warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/free-trade-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="free-trade-warehouse-vadodara" />;
}
