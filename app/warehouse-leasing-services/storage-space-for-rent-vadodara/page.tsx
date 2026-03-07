import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "storage space for rent in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional storage space for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/storage-space-for-rent-vadodara" },
  openGraph: {
    title: "storage space for rent in Vadodara | VadodaraExperts",
    description: "Professional storage space for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/storage-space-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="storage-space-for-rent-vadodara" />;
}
