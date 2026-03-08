import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-leasing-services")!;

export const metadata: Metadata = {
  title: "1000 sq ft warehouse in Vadodara | Warehouse Leasing Services | VadodaraExperts",
  description: "Professional 1000 sq ft warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-leasing-services/1000-sq-ft-warehouse-vadodara" },
  openGraph: {
    title: "1000 sq ft warehouse in Vadodara | VadodaraExperts",
    description: "Professional 1000 sq ft warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-leasing-services/1000-sq-ft-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="1000-sq-ft-warehouse-vadodara" />;
}
