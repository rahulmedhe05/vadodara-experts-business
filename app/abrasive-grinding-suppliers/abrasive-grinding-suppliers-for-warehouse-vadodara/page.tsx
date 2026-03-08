import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("abrasive-grinding-suppliers")!;

export const metadata: Metadata = {
  title: "Abrasive Grinding Suppliers For Warehouse in Vadodara | Abrasive Grinding Suppliers | VadodaraExperts",
  description: "Professional abrasive grinding suppliers for warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/abrasive-grinding-suppliers/abrasive-grinding-suppliers-for-warehouse-vadodara" },
  openGraph: {
    title: "Abrasive Grinding Suppliers For Warehouse in Vadodara | VadodaraExperts",
    description: "Professional abrasive grinding suppliers for warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/abrasive-grinding-suppliers/abrasive-grinding-suppliers-for-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="abrasive-grinding-suppliers-for-warehouse-vadodara" />;
}
