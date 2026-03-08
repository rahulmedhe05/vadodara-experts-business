import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "warehouse investment in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional warehouse investment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/warehouse-investment-vadodara" },
  openGraph: {
    title: "warehouse investment in Vadodara | VadodaraExperts",
    description: "Professional warehouse investment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/warehouse-investment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-investment-vadodara" />;
}
