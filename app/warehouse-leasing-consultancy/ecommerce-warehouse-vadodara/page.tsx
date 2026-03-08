import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "ecommerce warehouse in Vadodara | Warehouse Leasing Consultancy | VadodaraExperts",
  description: "Professional ecommerce warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy/ecommerce-warehouse-vadodara" },
  openGraph: {
    title: "ecommerce warehouse in Vadodara | VadodaraExperts",
    description: "Professional ecommerce warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy/ecommerce-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ecommerce-warehouse-vadodara" />;
}
