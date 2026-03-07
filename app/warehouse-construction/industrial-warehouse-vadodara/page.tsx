import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "industrial warehouse in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional industrial warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/industrial-warehouse-vadodara" },
  openGraph: {
    title: "industrial warehouse in Vadodara | VadodaraExperts",
    description: "Professional industrial warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/industrial-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="industrial-warehouse-vadodara" />;
}
