import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("warehouse-interior-design")!;

export const metadata: Metadata = {
  title: "warehouse office interior in Vadodara | Warehouse Interior Design | VadodaraExperts",
  description: "Professional warehouse office interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-office-interior-vadodara" },
  openGraph: {
    title: "warehouse office interior in Vadodara | VadodaraExperts",
    description: "Professional warehouse office interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/warehouse-interior-design/warehouse-office-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-office-interior-vadodara" />;
}
