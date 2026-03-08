import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "warehouse Bill area in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional warehouse bill area services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/warehouse-bill-area-vadodara" },
  openGraph: {
    title: "warehouse Bill area in Vadodara | VadodaraExperts",
    description: "Professional warehouse bill area services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/warehouse-bill-area-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-bill-area-vadodara" />;
}
