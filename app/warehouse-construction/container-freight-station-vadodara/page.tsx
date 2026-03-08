import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-construction")!;

export const metadata: Metadata = {
  title: "container freight station in Vadodara | Warehouse Construction | VadodaraExperts",
  description: "Professional container freight station services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-construction/container-freight-station-vadodara" },
  openGraph: {
    title: "container freight station in Vadodara | VadodaraExperts",
    description: "Professional container freight station services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-construction/container-freight-station-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="container-freight-station-vadodara" />;
}
