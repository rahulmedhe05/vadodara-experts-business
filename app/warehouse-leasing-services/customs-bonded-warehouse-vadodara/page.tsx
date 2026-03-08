import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "customs bonded warehouse in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional customs bonded warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/customs-bonded-warehouse-vadodara" },
  openGraph: {
    title: "customs bonded warehouse in Vadodara | VadodaraExperts",
    description: "Professional customs bonded warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/customs-bonded-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="customs-bonded-warehouse-vadodara" />;
}
