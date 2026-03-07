import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "best warehouse leasing in Vadodara | Warehouse Leasing Consultancy | VadodaraExperts",
  description: "Professional best warehouse leasing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy/best-warehouse-leasing-vadodara" },
  openGraph: {
    title: "best warehouse leasing in Vadodara | VadodaraExperts",
    description: "Professional best warehouse leasing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy/best-warehouse-leasing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-warehouse-leasing-vadodara" />;
}
