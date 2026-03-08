import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "last mile delivery warehouse in Vadodara | Warehouse Leasing Consultancy | VadodaraExperts",
  description: "Professional last mile delivery warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy/last-mile-delivery-warehouse-vadodara" },
  openGraph: {
    title: "last mile delivery warehouse in Vadodara | VadodaraExperts",
    description: "Professional last mile delivery warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy/last-mile-delivery-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="last-mile-delivery-warehouse-vadodara" />;
}
