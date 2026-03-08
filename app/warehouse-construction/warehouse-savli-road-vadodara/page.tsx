import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "warehouse Savli road in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional warehouse savli road services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/warehouse-savli-road-vadodara" },
  openGraph: {
    title: "warehouse Savli road in Vadodara | VadodaraExperts",
    description: "Professional warehouse savli road services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/warehouse-savli-road-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-savli-road-vadodara" />;
}
