import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "inward area design in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional inward area design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/inward-area-design-vadodara" },
  openGraph: {
    title: "inward area design in Vadodara | VadodaraExperts",
    description: "Professional inward area design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/inward-area-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="inward-area-design-vadodara" />;
}
