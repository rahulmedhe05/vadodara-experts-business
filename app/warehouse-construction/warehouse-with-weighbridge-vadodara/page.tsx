import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "warehouse with weighbridge in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional warehouse with weighbridge services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/warehouse-with-weighbridge-vadodara" },
  openGraph: {
    title: "warehouse with weighbridge in Vadodara | VadodaraExperts",
    description: "Professional warehouse with weighbridge services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/warehouse-with-weighbridge-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-with-weighbridge-vadodara" />;
}
