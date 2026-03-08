import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "fulfilment centre design in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional fulfilment centre design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/fulfilment-centre-design-vadodara" },
  openGraph: {
    title: "fulfilment centre design in Vadodara | VadodaraExperts",
    description: "Professional fulfilment centre design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/fulfilment-centre-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fulfilment-centre-design-vadodara" />;
}
