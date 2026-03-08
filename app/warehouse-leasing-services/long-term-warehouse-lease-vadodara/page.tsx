import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "long term warehouse lease in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional long term warehouse lease services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/long-term-warehouse-lease-vadodara" },
  openGraph: {
    title: "long term warehouse lease in Vadodara | VadodaraExperts",
    description: "Professional long term warehouse lease services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/long-term-warehouse-lease-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="long-term-warehouse-lease-vadodara" />;
}
