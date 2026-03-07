import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("elevator-maintenance")!;

export const metadata: Metadata = {
  title: "warehouse goods lift in Vadodara | Elevator Maintenance | VadodaraExperts",
  description: "Professional warehouse goods lift services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/elevator-maintenance/warehouse-goods-lift-vadodara" },
  openGraph: {
    title: "warehouse goods lift in Vadodara | VadodaraExperts",
    description: "Professional warehouse goods lift services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/elevator-maintenance/warehouse-goods-lift-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-goods-lift-vadodara" />;
}
