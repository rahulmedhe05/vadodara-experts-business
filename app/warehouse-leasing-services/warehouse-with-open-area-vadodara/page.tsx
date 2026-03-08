import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "warehouse with open area in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional warehouse with open area services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/warehouse-with-open-area-vadodara" },
  openGraph: {
    title: "warehouse with open area in Vadodara | VadodaraExperts",
    description: "Professional warehouse with open area services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/warehouse-with-open-area-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-with-open-area-vadodara" />;
}
