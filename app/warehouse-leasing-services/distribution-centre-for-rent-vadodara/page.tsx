import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "distribution centre for rent in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional distribution centre for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/distribution-centre-for-rent-vadodara" },
  openGraph: {
    title: "distribution centre for rent in Vadodara | VadodaraExperts",
    description: "Professional distribution centre for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/distribution-centre-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="distribution-centre-for-rent-vadodara" />;
}
