import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "storage facility for lease in Vadodara | Warehouse Leasing Consultancy | VadodaraExperts",
  description: "Professional storage facility for lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy/storage-facility-for-lease-vadodara" },
  openGraph: {
    title: "storage facility for lease in Vadodara | VadodaraExperts",
    description: "Professional storage facility for lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy/storage-facility-for-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="storage-facility-for-lease-vadodara" />;
}
