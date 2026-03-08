import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-consultancy")!;

export const metadata: Metadata = {
  title: "warehouse with power backup in Vadodara | Warehouse Leasing Consultancy | VadodaraExperts",
  description: "Professional warehouse with power backup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-consultancy/warehouse-with-power-backup-vadodara" },
  openGraph: {
    title: "warehouse with power backup in Vadodara | VadodaraExperts",
    description: "Professional warehouse with power backup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-consultancy/warehouse-with-power-backup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-with-power-backup-vadodara" />;
}
