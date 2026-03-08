import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "godown on rent in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional godown on rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/godown-on-rent-vadodara" },
  openGraph: {
    title: "godown on rent in Vadodara | VadodaraExperts",
    description: "Professional godown on rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/godown-on-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="godown-on-rent-vadodara" />;
}
