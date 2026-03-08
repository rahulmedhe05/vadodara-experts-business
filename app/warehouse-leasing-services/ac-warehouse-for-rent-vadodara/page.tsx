import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "AC warehouse for rent in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional ac warehouse for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/ac-warehouse-for-rent-vadodara" },
  openGraph: {
    title: "AC warehouse for rent in Vadodara | VadodaraExperts",
    description: "Professional ac warehouse for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/ac-warehouse-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ac-warehouse-for-rent-vadodara" />;
}
