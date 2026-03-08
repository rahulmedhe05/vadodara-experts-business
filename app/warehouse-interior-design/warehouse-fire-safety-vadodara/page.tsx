import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "warehouse fire safety in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional warehouse fire safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-fire-safety-vadodara" },
  openGraph: {
    title: "warehouse fire safety in Vadodara | VadodaraExperts",
    description: "Professional warehouse fire safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-fire-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-fire-safety-vadodara" />;
}
