import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "loading dock design in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional loading dock design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/loading-dock-design-vadodara" },
  openGraph: {
    title: "loading dock design in Vadodara | VadodaraExperts",
    description: "Professional loading dock design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/loading-dock-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="loading-dock-design-vadodara" />;
}
