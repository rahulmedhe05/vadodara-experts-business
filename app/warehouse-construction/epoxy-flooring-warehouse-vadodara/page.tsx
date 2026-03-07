import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "epoxy flooring warehouse in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional epoxy flooring warehouse services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/epoxy-flooring-warehouse-vadodara" },
  openGraph: {
    title: "epoxy flooring warehouse in Vadodara | VadodaraExperts",
    description: "Professional epoxy flooring warehouse services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/epoxy-flooring-warehouse-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="epoxy-flooring-warehouse-vadodara" />;
}
