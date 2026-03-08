import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "best warehouse contractor in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional best warehouse contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/best-warehouse-contractor-vadodara" },
  openGraph: {
    title: "best warehouse contractor in Vadodara | VadodaraExperts",
    description: "Professional best warehouse contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/best-warehouse-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-warehouse-contractor-vadodara" />;
}
